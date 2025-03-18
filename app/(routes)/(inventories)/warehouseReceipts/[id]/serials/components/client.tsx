'use client'

import { DownloadCloudIcon, PlusCircle } from 'lucide-react'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { columns, ProductSerialColumn } from './columns'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { DataTable } from './data-table'

interface ProductSerialClientProps {
  data: ProductSerialColumn[]
  length: number
  currentParam: string
}

export const ProductSerialClient: React.FC<ProductSerialClientProps> = ({ data, length, currentParam }) => {
  const exportExcel = () => {
    toast('Download excel file successfully.')
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
              <BreadcrumbLink href='/warehouseReceipts'>Warehouse Receipt</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/warehouseReceipts/${currentParam}`}>{currentParam}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Serials</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='flex items-center justify-between '>
        <Heading title={`Product Serials  (${length})`} description='Manage Product Serials for your store' />
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
      <Separator />
      <div className='bg-white/90 dark:bg-slate-950 rounded-xl p-5'>
        <DataTable searchKey='serialNumber' columns={columns} defaultData={data} currentParam={currentParam} />
      </div>
    </div>
  )
}
