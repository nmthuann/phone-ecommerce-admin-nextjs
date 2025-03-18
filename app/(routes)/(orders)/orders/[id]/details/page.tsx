import ErrorComponent from '@/components/errors/error-component'
import OrderDetail from './components/order-detail'
import { Order } from '@/types/orders.type'
import { getOrderById } from '@/actions/orders/get-order'

const OrderDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  try {
    const order: Order | null = await getOrderById(parseInt(id, 10))
    if (!order) {
      return (
        <ErrorComponent
          page='Purchase Order Details Page'
          message='Failed to load Purchase Order Details. Please try again later.'
        />
      )
    }

    return <OrderDetail order={order} currentParam={id} />
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

export default OrderDetailPage
