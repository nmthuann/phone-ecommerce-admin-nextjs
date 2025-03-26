import ErrorComponent from '@/components/errors/error-component'
import { Metadata } from 'next'
import { PurchaseOrderDetailColumn } from './components/columns'
import { PurchaseOrderDetailClient } from './components/client'
import prisma from '@/lib/prisma'
import { mapAttributes } from '@/utils/map'

export const metadata: Metadata = {
  title: 'Purchase Order Details',
  description: 'PurchaseOrder Details Management Table.'
}
const PurchaseOrderDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  try {
    const purchaseOrderDetails = await prisma.purchaseOrderDetail.findMany({
      where: {
        purchaseOrderId: parseInt(id)
      },
      include: {
        sku: true,
        purchaseOrder: true
      }
    })

    if (!purchaseOrderDetails) {
      return (
        <ErrorComponent
          page='Purchase Order Details Page'
          message='Failed to load Purchase Order Details. Please try again later.'
        />
      )
    }
    const formattedData: PurchaseOrderDetailColumn[] = purchaseOrderDetails.map(item => ({
      id: String(item.purchaseOrderId),
      orderNumber: item.purchaseOrder.orderNumber,
      quantity: String(item.quantity),
      unitPrice: String(item.unitPrice),
      skuId: String(item.sku.id),
      barcode: item.sku.barcode,
      skuNo: item.sku.skuNo,
      skuName: item.sku.skuName,
      image: item.sku.image,
      status: item.sku.status,
      skuAttributes: mapAttributes(item.sku.skuAttributes as Record<string, unknown>),
      slug: item.sku.slug
    }))

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <PurchaseOrderDetailClient
            poDetailColsData={formattedData}
            length={purchaseOrderDetails.length}
            currentParam={id}
          />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return (
      <ErrorComponent
        page='Purchase Order Details Page'
        message='Failed to load Purchase Order Details. Please try again later.'
      />
    )
  }
}

export default PurchaseOrderDetailsPage
