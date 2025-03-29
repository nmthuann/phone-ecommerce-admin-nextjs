'use client'
import { Badge } from '@/components/ui/badge'
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Currency from '@/components/utilities/currency'
import { OrderStatus } from '@/constants/order-status.enum'
import { format } from 'date-fns'
import { ArrowLeft, DownloadIcon, PencilLine, PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import toast from 'react-hot-toast'

interface OrderDetailProps {
  order: OrderWithDetails
  currentParam: string
}

const OrderDetail: FC<OrderDetailProps> = ({ order, currentParam }) => {
  const router = useRouter()
  const exportExcel = () => {
    toast.success('Download excel file successfully.')

    // toast()
  }
  return (
    <div className='container mx-auto p-4 space-y-2'>
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
      <div className='flex items-center justify-between '>
        <Heading
          title={`Order Details (${order.orderDetail.length})`}
          description='Manage Order Details for your store'
        />
        <div className='flex space-x-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={'outline'}
                  // disabled={order.status !== OrderStatus.CONFIRMED}
                  onClick={() => {
                    if (order.status === OrderStatus.CONFIRMED) {
                      toast.success('Download excel file successfully.')
                    } else {
                      toast.error('The order can only be exported when it is in the completed status.')
                    }
                  }}
                  className='sm:px-4 sm:py-2 px-2 py-1 '
                >
                  <PlusCircleIcon />
                  Create Invoice
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>The order can only be exported when it is in the completed status.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button onClick={() => console.log('onClick Add New')} className='sm:px-4 sm:py-2 px-2 py-1'>
            <PencilLine />
            Update Order
          </Button>

          <Button onClick={exportExcel} className='sm:px-4 sm:py-2 px-2 py-1 '>
            <DownloadIcon />
            Export File
          </Button>
        </div>
      </div>
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Order Details - #{order.id}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <p>
                <strong>Status:</strong> <Badge variant='destructive'>{order.status}</Badge>
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
                <strong>Shipping Fee:</strong> {String(order.shippingFee)} đ
              </p>
              <p>
                <strong>Discount:</strong> {String(order.discount)} %
              </p>
              <p>
                <strong>Created At:</strong> {format(new Date(order.createdAt), 'yyyy-MM-dd HH:mm:ss')}
              </p>
            </div>
            <div>
              <h2 className='text-lg font-semibold'>Customer Info</h2>
              <p>
                <strong>Name:</strong> {order.firstName} {order.lastName}
              </p>
              <p>
                <strong>Phone:</strong> {order.contactPhone}
              </p>
              <p>
                <strong>Email:</strong> {order.email}
              </p>
              <Separator className='my-2' />
              <h2 className='text-lg font-semibold'>Assigned Employee</h2>
              <p></p>
              <p>
                <strong>Email:</strong> {order.employeeId}
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
              {order.orderDetail.map(detail => (
                <tr key={detail.productSerialId} className='border'>
                  <td className='border p-2'>{detail.productSerial.serialNumber}</td>
                  <td className='border p-2'>
                    {format(new Date(detail.productSerial.dateManufactured), 'yyyy-MM-dd')}
                  </td>
                  <td className='border p-2'>
                    <Currency className='text-base' value={detail.unitPrice} />
                  </td>
                  <td className='border p-2'>{detail.tax}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button className='mt-4' onClick={() => router.push('/orders')}>
            <ArrowLeft className='w-4 h-4 ' />
            Back to Orders
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default OrderDetail

export interface OrderDetailItem {
  productSerialId: string
  productSerial: {
    serialNumber: string
    dateManufactured: string
  }
  unitPrice: string
  tax: string
}

export interface OrderWithDetails {
  id: string
  status: string
  orderType: boolean
  shippingMethod: string
  paymentMethod: string
  shippingAddress: string
  contactPhone: string
  shippingFee: string
  discount: string
  createdAt: string // YYYY-MM-DD HH:mm:ss format

  firstName: string
  lastName: string
  email: string

  employeeId: string

  orderDetail: OrderDetailItem[]
}
