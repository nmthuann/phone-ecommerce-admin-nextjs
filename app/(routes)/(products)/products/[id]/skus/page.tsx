import { ProductSkuColumn } from './components/columns'
import ErrorComponent from '@/components/errors/error-component'
import { Metadata } from 'next'
import { ProductSkuClient } from './components/client'
import prisma from '@/lib/prisma'
import { mapAttributes } from '@/utils/map'
export const metadata: Metadata = {
  title: 'SKUs',
  description: 'Skus Management Table.'
}

const ProductSkusPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  try {
    const page: number = 1
    const pageSize: number = 10

    const productSkus = await prisma.spuSkuMapping.findMany({
      where: { spuId: parseInt(id) },
      include: {
        productSku: true
      },
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    const formattedData: ProductSkuColumn[] = await Promise.all(
      productSkus.map(async item => ({
        id: String(item.productSku.id),
        skuNo: item.productSku.skuNo,
        barcode: item.productSku.barcode,
        skuName: item.productSku.skuName,
        image: item.productSku.image,
        status: item.productSku.status,
        slug: item.productSku.slug,
        skuAttributes: mapAttributes(item.productSku.skuAttributes as Record<string, unknown>),
        stock: await getStock(item.productSku.id)
      }))
    )
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

export const getStock = async (skuId: number) => {
  const stock = await prisma.productSerial.count({
    where: {
      productSkuId: skuId
    }
  })
  return stock
}
