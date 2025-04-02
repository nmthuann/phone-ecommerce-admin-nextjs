import { Brand, Price, Product, ProductSku, SpuSkuMapping } from '@prisma/client'

export type ProductWithDetails = Product & {
  brand: Brand
  spuSkuMapping: (SpuSkuMapping & {
    productSku: ProductSku & {
      price: Price[]
    }
  })[]
}
