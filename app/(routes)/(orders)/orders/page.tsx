import { Metadata } from 'next'
import { OrdersClient } from './components/client'
import ErrorComponent from '@/components/errors/error-component'
import { getOrdersByPage } from '@/actions/orders/get-orders'
import { OrderResponse } from '@/types/orders.type'
import { OrderColumn } from './components/columns'
import { format, parseISO } from 'date-fns'

export const metadata: Metadata = {
  title: 'Orders Page',
  description: 'Orders Management Table.'
}

const OrdersPage = async () => {
  try {
    const res = await getOrdersByPage(1, 10)
    console.log(res)
    if (!res) {
      return <ErrorComponent page='Orders Page' message='Failed to load Orders. Please try again later.' />
    }
    const formattedData: OrderColumn[] | undefined = res.data.map((item: OrderResponse) => ({
      id: String(item.id),
      userId: item.userId,
      employeeId: String(item.employeeId),
      status: item.status,
      orderType: item.orderType,
      shippingAddress: item.shippingAddress,
      contactPhone: item.contactPhone,
      shippingMethod: item.shippingMethod,
      paymentMethod: item.paymentMethod,
      shippingFee: String(item.shippingFee),
      discount: String(item.discount),
      postcode: item.postcode,
      createdAt: format(parseISO(String(item.createdAt)), 'yyyy-MM-dd HH:mm:ss'),
      updatedAt: format(parseISO(String(item.updatedAt)), 'yyyy-MM-dd HH:mm:ss')
    }))
    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <OrdersClient formattedData={formattedData} length={res.meta.itemCount} />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return <ErrorComponent page='Orders Page' message='Failed to load Orders. Please try again later.' />
  }
}

export default OrdersPage
