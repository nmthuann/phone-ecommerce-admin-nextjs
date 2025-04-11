import { Metadata } from 'next'
import { OrdersClient } from './components/client'
import ErrorComponent from '@/components/errors/error-component'
import { OrderColumn } from './components/columns'
import prisma from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Orders Page',
  description: 'Orders Management Table.'
}

const OrdersPage = async () => {
  const page = 1
  const pageSize = 10
  try {
    const orders = await prisma.order.findMany({
      include: {
        orderDetail: true,
        invoice: true
      },
      skip: (page - 1) * pageSize,
      take: pageSize
    })
    if (!orders) {
      return <ErrorComponent page='Orders Page' message='Failed to load Orders. Please try again later.' />
    }

    const count = await prisma.order.count()
    const formattedData: OrderColumn[] = orders.map(item => ({
      id: String(item.id),
      employeeId: item.employeeId ?? 'Empty',
      fullName: `${item.firstName} ${item.lastName}`,
      status: item.status,
      orderType: item.orderType,
      shippingAddress: item.shippingAddress,
      shippingMethod: item.shippingMethod,
      paymentMethod: item.paymentMethod,
      createdAt: item.createdAt.toISOString().split('T')[0],
      total: String(item.orderDetail.reduce((sum, detail) => sum + detail.unitPrice * 1, 0)),
      hasInvoice: !!item.invoice
    }))

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <OrdersClient initialData={formattedData} length={count} />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return <ErrorComponent page='Orders Page' message='Failed to load Orders. Please try again later.' />
  }
}

export default OrdersPage
