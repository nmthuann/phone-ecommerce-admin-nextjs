'use client'

import { DownloadCloudIcon, FileChartPie } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import LoadingOverlay from '@/components/loading-overlay'
import { toast as toastSonner } from 'sonner'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { DataTable } from './data-table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { OrderStatus } from '@/constants/order-status.enum'
import { columns, OrderColumn } from './columns'

interface OrderClientProps {
  initialData: OrderColumn[]
  length: number
}

export const OrdersClient: React.FC<OrderClientProps> = ({ initialData, length }) => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [filteredOrders, setFilteredOrders] = useState<OrderColumn[]>(initialData)

  const exportExcel = () => {
    toastSonner('Download excel file successfully.')
  }

  const handleFilterByStatus = async (status: string) => {
    setLoading(true)
    try {
      if (!status) {
        setFilteredOrders(initialData)
        setLoading(false)
        return
      }

      // const orders = await getOrdersByStatus(status, 1, 10)
      // if (orders.data.length === 0) {
      //   setFilteredOrders([])
      // } else {
      //   const formatted = orders.data.map((item: OrderResponse) => ({
      //     id: String(item.id),
      //     userId: item.userId,
      //     employeeId: String(item.employeeId),
      //     status: item.status,
      //     orderType: item.orderType,
      //     shippingAddress: item.shippingAddress,
      //     contactPhone: item.contactPhone,
      //     shippingMethod: item.shippingMethod,
      //     paymentMethod: item.paymentMethod,
      //     shippingFee: String(item.shippingFee),
      //     discount: String(item.discount),
      //     postcode: item.postcode,
      //     createdAt: format(parseISO(String(item.createdAt)), 'yyyy-MM-dd HH:mm:ss'),
      //     updatedAt: format(parseISO(String(item.updatedAt)), 'yyyy-MM-dd HH:mm:ss')
      //   }))
      //   setFilteredOrders(formatted)
      // }
    } catch (error: unknown) {
      console.log(error)
      toastSonner('Failed to load Purchase order. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Orders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-4 md:space-y-0'>
        <Heading title={`Orders (${length})`} description='Manage Orders for your store' />
        <div className='flex flex-nowrap items-center space-x-2 overflow-x-auto'>
          <Select onValueChange={handleFilterByStatus}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select a status?' />
            </SelectTrigger>
            <SelectContent>
              {Object.values(OrderStatus).map(status => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            onClick={() => {
              setLoading(true)
              router.push(`/`)
            }}
            disabled={loading}
            className='sm:px-4 sm:py-2 px-2 py-1 cursor-pointer'
          >
            <FileChartPie className='h-5 w-5' />
            <span className='hidden sm:block ml-2'>Create Report</span>
          </Button>

          <Button onClick={exportExcel} className='sm:px-4 sm:py-2 px-2 py-1 cursor-pointer'>
            <DownloadCloudIcon className='h-5 w-5' />
            <span className='hidden sm:block ml-2'>Export File</span>
          </Button>
        </div>
      </div>
      <Separator />

      <div className='overflow-x-auto'>
        <DataTable columns={columns} defaultData={filteredOrders} />
      </div>
      <LoadingOverlay loading={loading} text='Please wait...' />
    </div>
  )
}
