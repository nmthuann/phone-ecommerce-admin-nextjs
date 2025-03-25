/*
  Warnings:

  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_brand_id_fkey";

-- DropTable
DROP TABLE "Brand";

-- CreateTable
CREATE TABLE "brands" (
    "id" SERIAL NOT NULL,
    "brand_name" VARCHAR(50) NOT NULL,
    "brand_url" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "brand_abbreviation" VARCHAR(10) NOT NULL,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "brands_brand_name_key" ON "brands"("brand_name");

-- CreateIndex
CREATE UNIQUE INDEX "brands_brand_url_key" ON "brands"("brand_url");

-- CreateIndex
CREATE UNIQUE INDEX "brands_brand_abbreviation_key" ON "brands"("brand_abbreviation");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;
