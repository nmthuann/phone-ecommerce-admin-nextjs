'use client'

import { CalendarIcon, DownloadCloudIcon, FileChartPie, PackageSearch } from 'lucide-react'
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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { addDays, format } from 'date-fns'
import { DateRange } from 'react-day-picker'

interface OrderClientProps {
  initialData: OrderColumn[]
  length: number
}

export const OrdersClient: React.FC<OrderClientProps> = ({ initialData, length }) => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [filteredOrders, setFilteredOrders] = useState<OrderColumn[]>(initialData)
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20)
  })

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
    } catch (error: unknown) {
      console.log(error)
      toastSonner('Failed to load Purchase order. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
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

      <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-4 md:space-y-0'>
        <Heading title={`Orders (${length})`} description='Manage Orders for your store' />
        <div className='flex flex-nowrap items-center space-x-2 overflow-x-auto'>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id='date'
                variant={'outline'}
                className={cn('w-[300px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
              >
                <CalendarIcon />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                    </>
                  ) : (
                    format(date.from, 'LLL dd, y')
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                initialFocus
                mode='range'
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>

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
          <Button variant='outline' size='icon'>
            <PackageSearch />
          </Button>
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
