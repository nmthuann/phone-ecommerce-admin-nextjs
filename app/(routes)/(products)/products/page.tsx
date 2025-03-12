import { Metadata } from 'next'
import ErrorComponent from '@/components/errors/error-component'
import { getProductsByPage } from '@/actions/products/get-products'
import { ProductColumn } from './components/columns'
import { ProductResponse } from '@/types/products.type'
import { ProductsClient } from './components/client'
import { getBrands } from '@/actions/products/get-brands'
export const metadata: Metadata = {
  title: 'Products',
  description: 'Products Management Table.'
}

const ProductsPage = async () => {
  try {
    const res = await getProductsByPage(1, 10)
    const brands = await getBrands()
    const formattedData: ProductColumn[] | undefined = res.data.map((item: ProductResponse) => ({
      id: String(item.id),
      productName: item.productName,
      productLine: item.productLine,
      status: item.status,
      slug: item.slug,
      description: item.description,
      productSpecs: item.productSpecs,
      categoryName: item.categoryName,
      categoryUrl: item.categoryUrl,
      brandName: item.brandName,
      brandUrl: item.brandUrl
      // skus: item.skus
    }))

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <ProductsClient formattedData={formattedData} length={res.meta.itemCount} brands={brands} />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return <ErrorComponent page='Products Page' message='Failed to load Products. Please try again later.' />
  }
}

export default ProductsPage
