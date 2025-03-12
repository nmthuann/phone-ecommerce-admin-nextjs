import { ProductSkuColumn } from './components/columns'
import ErrorComponent from '@/components/errors/error-component'
import { Metadata } from 'next'
import { ProductSkuResponse } from '@/types/products.type'
import { getProductSkusByProductId } from '@/actions/products/get-product-skus'
import { ProductSkuClient } from './components/client'
export const metadata: Metadata = {
  title: 'SKUs',
  description: 'Skus Management Table.'
}

const ProductSkusPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  try {
    const productSkus = await getProductSkusByProductId(parseInt(id, 10))
    const formattedData: ProductSkuColumn[] | undefined = productSkus.map((item: ProductSkuResponse) => ({
      id: String(item.id),
      skuNo: item.skuNo,
      barcode: item.barcode,
      skuName: item.skuName,
      image: item.image,
      status: item.status,
      slug: item.slug,
      skuAttributes: item.skuAttributes,
      stock: item.stock
    }))
    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <ProductSkuClient skus={formattedData} length={formattedData.length} currentParam={id} />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return <ErrorComponent page='ProductSkus Page' message='Failed to load ProductSkus. Please try again later.' />
  }
}

export default ProductSkusPage
