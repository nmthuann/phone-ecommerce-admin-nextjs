/*
  Warnings:

  - You are about to alter the column `selling_price` on the `prices` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `display_price` on the `prices` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `unit_price` on the `purchase_order_details` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "prices" ALTER COLUMN "selling_price" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "display_price" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "purchase_order_details" ALTER COLUMN "unit_price" SET DATA TYPE DECIMAL(10,2);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "employee_id" VARCHAR(100) NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "contact_phone" VARCHAR(15) NOT NULL,
    "shipping_address" TEXT NOT NULL,
    "postcode" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "order_type" BOOLEAN NOT NULL DEFAULT true,
    "shipping_method" VARCHAR(50) NOT NULL,
    "payment_method" VARCHAR(50) NOT NULL,
    "note" TEXT,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shipping_fee" DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    "discount" DECIMAL(10,2) NOT NULL DEFAULT 0,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_details" (
    "order_id" INTEGER NOT NULL,
    "product_serial_id" UUID NOT NULL,
    "unit_price" DECIMAL(10,2) NOT NULL DEFAULT 0.0,
    "tax" DECIMAL(5,2) NOT NULL DEFAULT 0.0,

    CONSTRAINT "order_details_pkey" PRIMARY KEY ("order_id","product_serial_id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" SERIAL NOT NULL,
    "invoice_code" VARCHAR(50) NOT NULL,
    "order_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tax_code" VARCHAR(20) NOT NULL,
    "employee_id" VARCHAR(100) NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "invoices_invoice_code_key" ON "invoices"("invoice_code");

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_product_serial_id_fkey" FOREIGN KEY ("product_serial_id") REFERENCES "product_serials"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
