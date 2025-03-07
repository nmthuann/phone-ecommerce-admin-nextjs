'use client'

import { CalendarIcon, DownloadCloudIcon, PlusCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import LoadingOverlay from '@/components/loading-overlay'
import { columns, PurchaseOrdersColumn } from './columns'
import { PurchaseOrderResponse } from '@/types/inventories.type'
import { getPurchaseOrdersByOrderDate } from '@/actions/inventories/get-purchase-orders'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
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

interface PurchaseOrdersClientProps {
  formattedData: PurchaseOrdersColumn[]
  length: number
}

export const PurchaseOrdersClient: React.FC<PurchaseOrdersClientProps> = ({ formattedData, length }) => {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [loading, setLoading] = useState<boolean>(false)
  const [filteredPurchaseOrders, setFilteredPurchaseOrders] = useState<PurchaseOrdersColumn[]>(formattedData)

  const exportExcel = () => {
    toastSonner('Download excel file successfully.')
  }

  const handleFilterByOrderDate = async (orderDate: Date) => {
    setLoading(true)
    try {
      if (!orderDate) {
        setFilteredPurchaseOrders(formattedData)
        setLoading(false)
        return
      }

      const purchaseOrders = await getPurchaseOrdersByOrderDate(1, 10, orderDate)
      console.log('purchaseOrders:::', purchaseOrders)
      if (purchaseOrders.data.length === 0) {
        setFilteredPurchaseOrders([])
      } else {
        const formatted = purchaseOrders.data.map((item: PurchaseOrderResponse) => ({
          id: String(item.id),
          orderNumber: item.orderNumber,
          supplierId: String(item.supplierId),
          employeeId: String(item.employeeId),
          orderDate: String(item.orderDate),
          createdAt: String(item.createdAt)
        }))
        setFilteredPurchaseOrders(formatted)
      }
    } catch (error: unknown) {
      toastSonner('Failed to load Purchase order. Please try again.')
      console.log(error)
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
              <BreadcrumbPage>Purchase Orders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-4 md:space-y-0'>
        <Heading title={`Purchase Orders (${length})`} description='Manage Purchase Orders for your store' />
        <div className='flex flex-nowrap items-center space-x-2 overflow-x-auto'>
          {/* <CategoryCombobox data={categories} onSelectCategory={handleFilterByCategory} /> */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
              >
                <CalendarIcon />
                {date ? format(date, 'PPP') : <span>Chọn ngày tạo</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                selected={date}
                onSelect={value => {
                  setDate(value)
                  handleFilterByOrderDate(value as Date)
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button
            onClick={() => {
              setLoading(true)
              router.push(`/products/new`)
            }}
            disabled={loading}
            className='bg-white text-black dark:bg-slate-950 
                   dark:text-white hover:text-white hover:bg-slate-500 
                   flex items-center justify-center sm:px-4 sm:py-2 px-2 py-1 text-sm sm:text-base'
          >
            <PlusCircle className='h-5 w-5' />
            <span className='hidden sm:block ml-2'>Add New</span>
          </Button>

          <Button
            onClick={exportExcel}
            className='bg-white text-black dark:bg-slate-950 
                   dark:text-white hover:text-white hover:bg-slate-500  
                   flex items-center justify-center sm:px-4 sm:py-2 px-2 py-1 text-sm sm:text-base'
          >
            <DownloadCloudIcon className='h-5 w-5' />
            <span className='hidden sm:block ml-2'>Export File</span>
          </Button>
        </div>
      </div>
      <Separator />
      <div className='overflow-x-auto'>
        <DataTable columns={columns} defaultData={filteredPurchaseOrders} />
      </div>
      <LoadingOverlay loading={loading} text='Please wait...' />
    </div>
  )
}
