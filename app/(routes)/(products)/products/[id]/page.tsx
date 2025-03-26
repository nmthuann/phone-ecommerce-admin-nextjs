import prisma from '@/lib/prisma'
import { ProductForm } from './components/product-form'

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  let product = null
  if (id !== 'new') {
    product = await prisma.product.findUnique({
      where: {
        id: parseInt(id)
      }
    })
  }

  const brands = await prisma.brand.findMany()

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <ProductForm initialData={product} brands={brands} />
      </div>
    </div>
  )
}

export default ProductPage
