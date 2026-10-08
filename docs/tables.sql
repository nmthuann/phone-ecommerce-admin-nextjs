-- Brands table
CREATE TABLE brands (
  id SERIAL PRIMARY KEY,
  brand_name VARCHAR(50) UNIQUE,
  brand_url VARCHAR(255) UNIQUE,
  description TEXT,
  brand_abbreviation VARCHAR(10) UNIQUE
);

-- Products table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(255) UNIQUE,
  slug VARCHAR(100) UNIQUE,
  product_line VARCHAR(100),
  description TEXT,
  status BOOLEAN,
  product_specs JSON,
  brand_id INT REFERENCES brands(id) ON DELETE NO ACTION
);

-- Product SKUs
CREATE TABLE product_skus (
  id SERIAL PRIMARY KEY,
  sku_no VARCHAR(32) UNIQUE,
  barcode VARCHAR(32),
  sku_name VARCHAR(150),
  image VARCHAR(255),
  status BOOLEAN DEFAULT TRUE,
  sku_attributes JSON,
  slug VARCHAR(255) UNIQUE
);

-- SPU-SKU mapping
CREATE TABLE spu_sku_mapping (
  id SERIAL PRIMARY KEY,
  spu_id INT REFERENCES products(id) ON DELETE CASCADE,
  sku_id INT REFERENCES product_skus(id) ON DELETE CASCADE,
  UNIQUE (spu_id, sku_id)
);

-- Prices
CREATE TABLE prices (
  product_sku_id INT,
  begin_at TIMESTAMP,
  selling_price INT,
  display_price INT,
  created_at TIMESTAMP DEFAULT now(),
  PRIMARY KEY (product_sku_id, begin_at),
  FOREIGN KEY (product_sku_id) REFERENCES product_skus(id) ON DELETE CASCADE
);

-- Suppliers
CREATE TABLE suppliers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address TEXT,
  phone VARCHAR(15),
  email VARCHAR(100)
);

-- Purchase Orders
CREATE TABLE purchase_orders (
  id SERIAL PRIMARY KEY,
  order_number VARCHAR(50) UNIQUE,
  supplier_id INT REFERENCES suppliers(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT now(),
  order_date DATE,
  employee_id VARCHAR(100)
);

-- Purchase Order Details
CREATE TABLE purchase_order_details (
  purchase_order_id INT,
  sku_id INT,
  quantity INT,
  unit_price INT,
  PRIMARY KEY (purchase_order_id, sku_id),
  FOREIGN KEY (purchase_order_id) REFERENCES purchase_orders(id) ON DELETE CASCADE,
  FOREIGN KEY (sku_id) REFERENCES product_skus(id) ON DELETE CASCADE
);

-- Warehouse Receipts
CREATE TABLE warehouse_receipts (
  id SERIAL PRIMARY KEY,
  receipt_number VARCHAR(50) UNIQUE,
  purchase_order_id INT UNIQUE REFERENCES purchase_orders(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT now(),
  receipt_date DATE,
  employee_id VARCHAR(100)
);

-- Product Serials
CREATE TABLE product_serials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  serial_number VARCHAR(100) UNIQUE,
  date_manufactured DATE,
  product_sku_id INT REFERENCES product_skus(id) ON DELETE CASCADE,
  warehouse_receipt_id INT REFERENCES warehouse_receipts(id) ON DELETE CASCADE,
  status BOOLEAN DEFAULT TRUE
);

-- Orders
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  employee_id VARCHAR(100),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  contact_phone VARCHAR(15),
  shipping_address TEXT,
  postcode VARCHAR,
  status VARCHAR DEFAULT 'PENDING',
  order_type BOOLEAN DEFAULT TRUE,
  shipping_method VARCHAR(50),
  payment_method VARCHAR(50),
  note TEXT,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  shipping_fee INT DEFAULT 0,
  discount INT DEFAULT 0
);

-- Order Details
CREATE TABLE order_details (
  order_id INT,
  product_serial_id UUID,
  unit_price INT DEFAULT 0,
  tax INT DEFAULT 0,
  PRIMARY KEY (order_id, product_serial_id),
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_serial_id) REFERENCES product_serials(id) ON DELETE CASCADE
);

-- Invoices
CREATE TABLE invoices (
  id SERIAL PRIMARY KEY,
  invoice_code VARCHAR(50) UNIQUE,
  order_id INT UNIQUE REFERENCES orders(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT now(),
  employee_id VARCHAR(100),
  tax_code VARCHAR(20),
  subtotal INT,
  tax_amount INT,
  total_amount INT,
  notes TEXT
);