import ErrorComponent from '@/components/errors/error-component'
import prisma from '@/lib/prisma'
import { Metadata } from 'next'
import OrderDetail, { OrderWithDetails } from './components/order-detail'

export const metadata: Metadata = {
  title: 'Order Page',
  description: 'Order Management Table.'
}

const OrderPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  try {
    // const order: Order | null = await getOrderById(parseInt(id, 10))
    const order = await prisma.order.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        invoice: true
      }
    })

    const orderDetails = await prisma.orderDetail.findMany({
      where: {
        orderId: parseInt(id)
      },
      include: {
        productSerial: true
      }
    })

    if (!order) {
      return <ErrorComponent page='Order Page' message='Failed to load Order Details. Please try again later.' />
    }

    if (!orderDetails) {
      return <ErrorComponent page='Order Page' message='Failed to load Order Details. Please try again later.' />
    }

    const formattedOrder: OrderWithDetails = {
      id: String(order.id),
      status: order.status,
      orderType: order.orderType,
      shippingMethod: order.shippingMethod,
      paymentMethod: order.paymentMethod,
      shippingAddress: order.shippingAddress,
      contactPhone: order.contactPhone,
      shippingFee: String(order.shippingFee),
      discount: String(order.discount),
      createdAt: order.createdAt.toISOString().split('T')[0],

      firstName: order.firstName,
      lastName: order.lastName,
      email: order.email,

      employeeId: order.employeeId,

      orderDetail: orderDetails.map(detail => ({
        productSerialId: detail.productSerialId,
        productSerial: {
          serialNumber: detail.productSerial.serialNumber,
          dateManufactured: detail.productSerial.dateManufactured.toISOString().split('T')[0]
        },
        unitPrice: String(detail.unitPrice),
        tax: String(detail.tax)
      }))
    }

    return <OrderDetail order={formattedOrder} currentParam={id} />
  } catch (error: unknown) {
    console.log(error)
    return <ErrorComponent page='Order Page' message='Failed to load Purchase Order Details. Please try again later.' />
  }
}

export default OrderPage
