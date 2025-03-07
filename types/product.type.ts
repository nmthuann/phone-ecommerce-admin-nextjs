export type ProductResponse = {
  id: string
  slug: string
  barcode: string
  productName: string
  productThumb: string
  category: string
  categoryUrl: string
  salePrice: number
  importPrice: number
  stock: number
  sold: number
  isActive: boolean
  unit: string
  description: string
  specs: Specs[]
}

export type Product = {
  id: string // Mã định danh duy nhất
  slug: string // URL thân thiện cho sản phẩm
  barcode: string // Mã vạch sản phẩm
  productName: string // Tên sản phẩm
  productThumb: string // URL hình ảnh sản phẩm
  category: string // Danh mục sản phẩm
  categoryUrl: string // URL danh mục
  salePrice: number // Giá bán
  importPrice: number // Giá nhập
  stock: number // Số lượng tồn kho
  sold: number // Số lượng đã bán
  isActive: boolean // Trạng thái kích hoạt sản phẩm
  unit: string // Đơn vị sản phẩm
  description: string // Mô tả sản phẩm
}

export type Specs = {
  k: string
  v: string
}

export type Category = {
  id: number
  categoryName: string
  description: string
  categoryUrl: string
  parentId: string
  leftValue: number
  rightValue: number
}

export type Attribute = {
  key: string
  value: unknown
}
