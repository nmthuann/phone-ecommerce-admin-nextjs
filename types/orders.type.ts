import { ProductSerial } from './inventories.type'

export type OrderResponse = {
  id: number
  userId: string
  employeeId: number
  status: string
  orderType: boolean //1: ON, 0: OFF
  shippingAddress: string
  contactPhone: string
  shippingMethod: string
  paymentMethod: string
  note: string
  createdAt: Date
  updatedAt: Date
  shippingFee: number
  discount: number
  postcode: string
}

export type Order = {
  id: number
  employee: PublicUser
  user: PublicUser
  status: string
  orderType: boolean
  shippingAddress: string
  contactPhone: string
  shippingMethod: string
  paymentMethod: string
  note?: string
  createdAt: Date
  updatedAt: Date
  shippingFee: number
  discount: number
  postcode?: string
  orderDetails: OrderDetail[]
}

export type OrderDetail = {
  productSerial: Omit<ProductSerial, 'sku'>
  unitPrice: number
  tax: number
}

export type PublicUser = {
  id: string
  email: string
  firstName: string
  lastName: string
  avatarUrl?: string
}
