'use client'

import { DownloadCloudIcon, PlusCircle } from 'lucide-react'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { pODetailColumns, PurchaseOrderDetailColumn } from './columns'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { DataTable } from './data-table'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import PurchaseOrderDetailModal from './po-detail-modal'
import { useState } from 'react'

interface PurchaseOrderDetailClientProps {
  poDetailColsData: PurchaseOrderDetailColumn[]
  length: number
  currentParam: string
}

export const PurchaseOrderDetailClient: React.FC<PurchaseOrderDetailClientProps> = ({
  poDetailColsData,
  length,
  currentParam
}) => {
  const exportExcel = () => {
    toast('Download excel file successfully.')
  }
  const [isOpen, setIsOpen] = useState<boolean>(false)
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
              <BreadcrumbLink href='/purchaseOrders'>Purchase Orders</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/purchaseOrders/${currentParam}`}>{currentParam}</BreadcrumbLink>
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
          title={`Purchase Order Details (${length})`}
          description='Manage Purchase Order Details for your store'
        />
        <div className='flex space-x-2'>
          <Button onClick={() => setIsOpen(true)} className='sm:px-4 sm:py-2 px-2 py-1 cursor-pointer'>
            <PlusCircle />
            Add New
          </Button>
          <PurchaseOrderDetailModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          <Button onClick={exportExcel} className='sm:px-4 sm:py-2 px-2 py-1 cursor-pointer'>
            <DownloadCloudIcon />
            Export File
          </Button>
        </div>
      </div>
      <Separator />
      <div className='bg-white/90 dark:bg-slate-950 rounded-xl p-5'>
        <DataTable searchKey='orderNumber' columns={pODetailColumns} data={poDetailColsData} />
      </div>
    </div>
  )
}
