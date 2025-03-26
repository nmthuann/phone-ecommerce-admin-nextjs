import ErrorComponent from '@/components/errors/error-component'
import prisma from '@/lib/prisma'
import { SkuForm } from './components/sku-form'

const ProductSkuPage = async ({ params }: { params: Promise<{ id: string; skuId: string }> }) => {
  const { id, skuId } = await params

  const productSku = await prisma.productSku.findFirst({
    where: {
      id: parseInt(skuId)
    }
  })

  try {
    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <SkuForm initialData={productSku} productId={id} currentParam={skuId} />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return <ErrorComponent page='Prices Page' message='Failed to load Prices. Please try again later.' />
  }
}

export default ProductSkuPage
