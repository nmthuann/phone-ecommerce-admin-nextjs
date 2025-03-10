import { getPurchaseOrderById } from '@/actions/inventories/get-purchase-order'
import ErrorComponent from '@/components/errors/error-component'
import { PurchaseOrder, PurchaseOrderDetail } from '@/types/inventories.type'
import { Metadata } from 'next'
import { PurchaseOrderDetailColumn } from './components/columns'
import { PurchaseOrderDetailClient } from './components/client'
export const metadata: Metadata = {
  title: 'Purchase Order Details',
  description: 'PurchaseOrder Details Management Table.'
}
const PurchaseOrderDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  try {
    const purchaseOrder: PurchaseOrder | null = await getPurchaseOrderById(parseInt(id, 10))
    if (!purchaseOrder) {
      return (
        <ErrorComponent
          page='Purchase Order Details Page'
          message='Failed to load Purchase Order Details. Please try again later.'
        />
      )
    }
    const formattedData: PurchaseOrderDetailColumn[] | undefined = purchaseOrder.purchaseOrderDetails.map(
      (item: PurchaseOrderDetail) => ({
        id: String(purchaseOrder.id),
        orderNumber: purchaseOrder.orderNumber,
        quantity: String(item.quantity),
        unitPrice: String(item.unitPrice),
        skuId: String(item.sku.id),
        barcode: item.sku.barcode,
        skuNo: item.sku.skuNo,
        skuName: item.sku.skuName,
        image: item.sku.image,
        status: item.sku.status,
        skuAttributes: item.sku.skuAttributes,
        slug: item.sku.slug
      })
    )

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <PurchaseOrderDetailClient
            poDetailColsData={formattedData}
            length={purchaseOrder.purchaseOrderDetails.length}
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
