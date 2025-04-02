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
