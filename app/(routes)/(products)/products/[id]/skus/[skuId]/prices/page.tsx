import ErrorComponent from '@/components/errors/error-component'
import { PriceColumn } from './components/columns'
import { Metadata } from 'next'
import { PriceClient } from './components/client'
import prisma from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Prices',
  description: 'Prices Management Table.'
}
const PricesPage = async ({ params }: { params: Promise<{ id: string; skuId: string }> }) => {
  const { id, skuId } = await params
  const page: number = 1
  const pageSize: number = 10
  const prices = await prisma.price.findMany({
    where: {
      productSkuId: parseInt(skuId)
    },
    skip: (page - 1) * pageSize,
    take: pageSize
  })

  const pODetail = await prisma.purchaseOrderDetail.findFirst({
    where: {
      skuId: parseInt(skuId)
    },
    include: {
      purchaseOrder: true
    },
    orderBy: {
      purchaseOrder: {
        orderDate: 'desc'
      }
    }
  })
  // console.log(pODetail?.unitPrice)
  if (!pODetail) {
    return <ErrorComponent page='Prices Page' message='Failed to load Prices. Please try again later.' />
  }
  try {
    const formattedData: PriceColumn[] = prices.map(item => ({
      productSkuId: String(item.productSkuId),
      beginAt: item.beginAt.toISOString().split('T')[0],
      displayPrice: String(item.displayPrice),
      sellingPrice: String(item.sellingPrice),
      createdAt: item.createdAt.toISOString().split('T')[0]
    }))

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <PriceClient
            data={formattedData}
            length={prices.length}
            previousParam={id}
            currentParam={skuId}
            poDetail={{
              productSkuId: String(pODetail.skuId),
              quantity: String(pODetail.quantity),
              unitPrice: String(pODetail.unitPrice)
            }}
          />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return <ErrorComponent page='Prices Page' message='Failed to load Prices. Please try again later.' />
  }
}

export default PricesPage
