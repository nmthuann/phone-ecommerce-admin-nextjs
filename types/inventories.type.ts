import { Attribute } from './product.type'

export type PurchaseOrderResponse = {
  id: number
  orderNumber: string
  supplierId: number
  employeeId: number
  orderDate: Date
  createdAt: Date
}

export type PurchaseOrder = {
  id: number
  orderNumber: string
  supplierId: number
  employeeId: number
  orderDate: Date
  createdAt: Date
  purchaseOrderDetails: PurchaseOrderDetail[]
}

export type PurchaseOrderDetail = {
  sku: Sku
  quantity: number
  unitPrice: number
}

export type Sku = {
  id: number
  skuNo: string
  barcode: string
  skuName: string
  image: string
  status: boolean
  skuAttributes: Attribute[]
  slug: string
}

export type Supplier = {
  id: number
  name: string
  address: string
  phone: string
  email: string
}

export type WarehouseReceiptResponse = {
  id: number
  receiptNumber: string
  purchaseOrder: PurchaseOrderDto
  employeeId: number
  receiptDate: Date
  createdAt: Date
}

export type PurchaseOrderDto = {
  id: number
  orderNumber: string
  orderDate: Date
  createdAt: Date
}

export type ProductSerialResponse = {
  id: string
  serialNumber: string
  dateManufactured: Date
  warehouseReceipt: WarehouseReceipt
  sku: Sku
}

export type WarehouseReceipt = {
  id: number
  receiptNumber: string
  receiptDate: Date
  createdAt: Date
}
