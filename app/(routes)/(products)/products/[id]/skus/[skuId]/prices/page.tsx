import ErrorComponent from '@/components/errors/error-component'
import { PriceColumn } from './components/columns'
import { Metadata } from 'next'
import { format, parseISO } from 'date-fns'
import { PriceClient } from './components/client'
import prisma from '@/lib/prisma'
import { PurchaseOrderDetail } from '@prisma/client'

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
  console.log(pODetail?.unitPrice)

  try {
    const formattedData: PriceColumn[] = prices.map(item => ({
      productSkuId: String(item.productSkuId),
      beginAt: format(parseISO(String(item.beginAt)), 'yyyy-MM-dd HH:mm:ss'),
      displayPrice: String(item.displayPrice),
      sellingPrice: String(item.sellingPrice),
      createdAt: format(parseISO(String(item.createdAt)), 'yyyy-MM-dd HH:mm:ss')
    }))

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <PriceClient
            data={formattedData}
            length={prices.length}
            previousParam={id}
            currentParam={skuId}
            poDetail={pODetail as PurchaseOrderDetail}
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
