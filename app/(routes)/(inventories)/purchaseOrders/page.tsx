import { Metadata } from 'next'
import { PurchaseOrdersColumn } from './components/columns'
import { PurchaseOrdersClient } from './components/client'
import ErrorComponent from '@/components/errors/error-component'
import prisma from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Purchase Orders Page',
  description: 'Purchase Orders Management Table.'
}

const PurchaseOrdersPage = async () => {
  const page = 1
  const pageSize = 10
  try {
    const purchaseOrders = await prisma.purchaseOrder.findMany({
      include: {
        supplier: true,
        warehouseReceipt: true,
        purchaseOrderDetail: true
      },
      skip: (page - 1) * pageSize,
      take: pageSize
    })

    const count = await prisma.purchaseOrder.count()
    if (!purchaseOrders) {
      return (
        <ErrorComponent page='Purchase Orders Page' message='Failed to load Purchase Orders. Please try again later.' />
      )
    }
    const formattedData: PurchaseOrdersColumn[] = purchaseOrders.map(item => ({
      id: String(item.id),
      orderNumber: item.orderNumber,
      supplierId: String(item.supplierId),
      employeeId: String(item.employeeId),
      orderDate: item.orderDate.toISOString().split('T')[0], // Lấy YYYY-MM-DD
      createdAt: String(item.createdAt),
      hasDetail: item.purchaseOrderDetail && item.purchaseOrderDetail.length > 0, // Kiểm tra có detail không
      hasWarehouseReceipt: Boolean(item.warehouseReceipt)
    }))

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <PurchaseOrdersClient formattedData={formattedData} length={count} />
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
