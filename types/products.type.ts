export type SkuResponse = {
  id: number
  skuName: string
  image: string
  slug: string
  skuAttributes: Attribute[]
  sellingPrice?: number
  displayPrice?: number
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

export type ProductResponse = {
  id: number
  productName: string
  productLine: string
  status: boolean
  slug: string
  description: string
  productSpecs: Attribute[]
  categoryName: string
  categoryUrl: string
  brandName: string
  brandUrl: string
  skus: SkuResponse[]
}

export type Product = {
  id: number
  productName: string
  slug: string
  productLine: string
  description?: string
  status: boolean
  productSpecs?: Attribute[]
  brandName?: string
}

export type Attribute = {
  key: string
  value: string
}

export type Category = {
  id: number
  categoryName: string
  description: string
  categoryUrl: string
}

export type Brand = {
  id: number
  brandName: string
  brandUrl: string
  description?: string
  brandAbbreviation: string
}

export type ProductSkuResponse = {
  id: number
  skuNo: string
  barcode: string
  skuName: string
  image: string
  status: boolean
  slug: string
  skuAttributes: Attribute[]
  stock: number
}

export type PriceResponse = {
  productSkuId: number
  beginAt: Date
  sellingPrice: number
  displayPrice: number
  createdAt: Date
}
