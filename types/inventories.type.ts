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
