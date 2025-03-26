import { Metadata } from 'next'
import ErrorComponent from '@/components/errors/error-component'
import { ProductColumn } from './components/columns'
import { ProductsClient } from './components/client'
import prisma from '@/lib/prisma'
import { mapAttributes } from '@/utils/map'
export const metadata: Metadata = {
  title: 'Products',
  description: 'Products Management Table.'
}

const ProductsPage = async () => {
  const page = 1
  const pageSize = 10
  const products = await prisma.product.findMany({
    include: {
      brand: true
    },
    skip: (page - 1) * pageSize,
    take: pageSize
  })

  const totalProducts = await prisma.product.count()

  const brands = await prisma.brand.findMany()

  try {
    const formattedData: ProductColumn[] = products.map(item => ({
      id: String(item.id),
      productName: item.productName,
      productLine: item.productLine,
      status: item.status,
      slug: item.slug,
      description: item.description,
      productSpecs: mapAttributes(item.productSpecs as Record<string, unknown>),
      brandName: item.brand.brandName,
      brandUrl: item.brand.brandUrl
    }))

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
          <ProductsClient formattedData={formattedData} length={totalProducts} brands={brands} />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return <ErrorComponent page='Products Page' message='Failed to load Products. Please try again later.' />
  }
}

export default ProductsPage
