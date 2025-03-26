import ErrorComponent from '@/components/errors/error-component'
import { Metadata } from 'next'
import { WarehouseReceiptColumn } from './components/columns'
import { WarehouseReceiptClient } from './components/client'
import prisma from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Warehouse Receipts Page',
  description: 'Warehouse Receipts Management Table.'
}

const WarehouseReceiptsPage = async () => {
  const page = 1
  const pageSize = 10
  try {
    const warehouseReceipts = await prisma.warehouseReceipt.findMany({
      include: {
        purchaseOrder: true
      },
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    const count = await prisma.warehouseReceipt.count()

    if (!warehouseReceipts) {
      return (
        <ErrorComponent
          page='Warehouse Receipts Page'
          message='Failed to load Warehouse Receipts. Please try again later.'
        />
      )
    }
    const formattedData: WarehouseReceiptColumn[] | undefined = warehouseReceipts.map(item => ({
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
          <WarehouseReceiptClient data={formattedData} length={count} />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return (
      <ErrorComponent
        page='Warehouse Receipts Page'
        message='Failed to load Warehouse Receipts. Please try again later.'
      />
    )
  }
}
export default WarehouseReceiptsPage
