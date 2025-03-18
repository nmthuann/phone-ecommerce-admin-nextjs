'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import Currency from '@/components/utilities/currency'
import { Order } from '@/types/orders.type'
import { format } from 'date-fns'
import { DownloadCloudIcon, PlusCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { toast } from 'sonner'

interface OrderDetailProps {
  order: Order
  currentParam: string
}

const OrderDetail: FC<OrderDetailProps> = ({ order, currentParam }) => {
  const router = useRouter()
  const exportExcel = () => {
    toast('Download excel file successfully.')
  }
  return (
    <div className='container mx-auto p-4'>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/orders'>Orders</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/orders/${currentParam}`}>{currentParam}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='flex items-center justify-between m-2'>
        <Heading
          title={`Order Details (${order.orderDetails.length})`}
          description='Manage Order Details for your store'
        />
        <div className='flex space-x-2'>
          <Button onClick={() => console.log('onClick Add New')} className='sm:px-4 sm:py-2 px-2 py-1'>
            <PlusCircle />
            Add New
          </Button>

          <Button onClick={exportExcel} className='sm:px-4 sm:py-2 px-2 py-1 '>
            <DownloadCloudIcon />
            Export File
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Order Details - #{order.id}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <p>
                <strong>Order Type:</strong> {order.orderType ? 'Online' : 'Offline'}
              </p>
              <p>
                <strong>Shipping Method:</strong> {order.shippingMethod}
              </p>
              <p>
                <strong>Payment Method:</strong> {order.paymentMethod}
              </p>
              <p>
                <strong>Shipping Address:</strong> {order.shippingAddress}
              </p>
              <p>
                <strong>Contact Phone:</strong> {order.contactPhone}
              </p>
              <p>
                <strong>Shipping Fee:</strong> {order.shippingFee} đ
              </p>
              <p>
                <strong>Discount:</strong> {order.discount} %
              </p>
              <p>
                <strong>Created At:</strong> {format(new Date(order.createdAt), 'yyyy-MM-dd HH:mm:ss')}
              </p>
            </div>
            <div>
              <h2 className='text-lg font-semibold'>Customer Info</h2>
              <p>
                <strong>Name:</strong> {order.user.firstName} {order.user.lastName}
              </p>
              <p>
                <strong>Email:</strong> {order.user.email}
              </p>
              <Separator className='my-2' />
              <h2 className='text-lg font-semibold'>Assigned Employee</h2>
              <p>
                <strong>Name:</strong> {order.employee.firstName} {order.employee.lastName}
              </p>
              <p>
                <strong>Email:</strong> {order.employee.email}
              </p>
            </div>
          </div>
          <Separator className='my-4' />
          <h2 className='text-lg font-semibold'>Order Items</h2>
          <table className='w-full border-collapse border border-gray-300 mt-2'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='border p-2'>Serial Number</th>
                <th className='border p-2'>Manufactured Date</th>
                <th className='border p-2'>Unit Price</th>
                <th className='border p-2'>Tax</th>
              </tr>
            </thead>
            <tbody>
              {order.orderDetails.map(item => (
                <tr key={item.productSerial.id} className='border'>
                  <td className='border p-2'>{item.productSerial.serialNumber}</td>
                  <td className='border p-2'>{format(new Date(item.productSerial.dateManufactured), 'yyyy-MM-dd')}</td>
                  <td className='border p-2'>
                    <Currency className='text-base' value={item.unitPrice} />
                  </td>
                  <td className='border p-2'>{item.tax}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button className='mt-4' onClick={() => router.push('/orders')}>
            Back to Orders
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default OrderDetail
