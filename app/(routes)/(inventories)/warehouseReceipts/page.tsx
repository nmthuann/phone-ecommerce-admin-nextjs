import { getWarehouseReceiptsByPage } from '@/actions/inventories/get-warehouse-receipts'
import ErrorComponent from '@/components/errors/error-component'
import { Metadata } from 'next'
import { WarehouseReceiptResponse } from '@/types/inventories.type'
import { WarehouseReceiptColumn } from './components/columns'
import { WarehouseReceiptClient } from './components/client'

export const metadata: Metadata = {
  title: 'Warehouse Receipts Pgae',
  description: 'Warehouse Receipts Management Table.'
}

const WarehouseReceiptsPage = async () => {
  try {
    const res = await getWarehouseReceiptsByPage(1, 10)
    console.log(res)
    if (!res) {
      return (
        <ErrorComponent page='Purchase Orders Page' message='Failed to load Purchase Orders. Please try again later.' />
      )
    }
    const formattedData: WarehouseReceiptColumn[] | undefined = res.data.map((item: WarehouseReceiptResponse) => ({
      id: String(item.id),
      receiptNumber: item.receiptNumber,
      orderNumber: item.purchaseOrder.orderNumber,
      employeeId: String(item.employeeId),
      receiptDate: String(item.receiptDate),
      createdAt: String(item.createdAt)
    }))
    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <WarehouseReceiptClient data={formattedData} length={res.meta.itemCount} />
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
export default WarehouseReceiptsPage
