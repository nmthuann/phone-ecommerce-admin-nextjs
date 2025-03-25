-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "brand_name" VARCHAR(50) NOT NULL,
    "brand_url" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "brand_abbreviation" VARCHAR(10) NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "product_name" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "product_line" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "product_specs" JSONB,
    "brand_id" INTEGER,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_skus" (
    "id" SERIAL NOT NULL,
    "sku_no" VARCHAR(32) NOT NULL,
    "barcode" VARCHAR(32) NOT NULL,
    "sku_name" VARCHAR(150) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "sku_attributes" JSONB NOT NULL,
    "slug" VARCHAR(255) NOT NULL,

    CONSTRAINT "product_skus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spu_sku_mapping" (
    "id" SERIAL NOT NULL,
    "spu_id" INTEGER NOT NULL,
    "sku_id" INTEGER NOT NULL,

    CONSTRAINT "spu_sku_mapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prices" (
    "product_sku_id" INTEGER NOT NULL,
    "begin_at" TIMESTAMP(3) NOT NULL,
    "selling_price" DOUBLE PRECISION NOT NULL,
    "display_price" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prices_pkey" PRIMARY KEY ("product_sku_id","begin_at")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_brand_name_key" ON "Brand"("brand_name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_brand_url_key" ON "Brand"("brand_url");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_brand_abbreviation_key" ON "Brand"("brand_abbreviation");

-- CreateIndex
CREATE UNIQUE INDEX "products_product_name_key" ON "products"("product_name");

-- CreateIndex
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "product_skus_sku_no_key" ON "product_skus"("sku_no");

-- CreateIndex
CREATE UNIQUE INDEX "product_skus_slug_key" ON "product_skus"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "spu_sku_mapping_spu_id_sku_id_key" ON "spu_sku_mapping"("spu_id", "sku_id");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spu_sku_mapping" ADD CONSTRAINT "spu_sku_mapping_spu_id_fkey" FOREIGN KEY ("spu_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spu_sku_mapping" ADD CONSTRAINT "spu_sku_mapping_sku_id_fkey" FOREIGN KEY ("sku_id") REFERENCES "product_skus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prices" ADD CONSTRAINT "prices_product_sku_id_fkey" FOREIGN KEY ("product_sku_id") REFERENCES "product_skus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
