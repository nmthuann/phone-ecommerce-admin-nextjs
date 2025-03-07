import { Metadata } from 'next'
import { getPurchaseOrdersByPage } from '@/actions/inventories/get-purchase-orders'
import { PurchaseOrdersColumn } from './components/columns'
import { PurchaseOrderResponse } from '@/types/inventories.type'
import { PurchaseOrdersClient } from './components/client'
import ErrorComponent from '@/components/errors/error-component'

export const metadata: Metadata = {
  title: 'Purchase Orders Pgae',
  description: 'Purchase Orders Management Table.'
}

const PurchaseOrdersPage = async () => {
  try {
    const res = await getPurchaseOrdersByPage(1, 10)
    console.log(res)
    if (!res) {
      return (
        <ErrorComponent page='Purchase Orders Page' message='Failed to load Purchase Orders. Please try again later.' />
      )
    }
    const formattedData: PurchaseOrdersColumn[] | undefined = res.data.map((item: PurchaseOrderResponse) => ({
      id: String(item.id),
      orderNumber: item.orderNumber,
      supplierId: String(item.supplierId),
      employeeId: String(item.employeeId),
      orderDate: String(item.orderDate),
      createdAt: String(item.createdAt)
    }))
    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <PurchaseOrdersClient formattedData={formattedData} length={res.meta.itemCount} />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return (
      <ErrorComponent page='Purchase Orders Page' message='Failed to load Purchase Orders. Please try again later.' />
    )
  }
}

export default PurchaseOrdersPage
