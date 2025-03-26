'use client'

import { DownloadCloudIcon, PlusCircle } from 'lucide-react'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { columns, PriceColumn } from './columns'
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
import { DataTable } from '@/components/ui/data-table'
import { useState } from 'react'
import PriceModal from './price-modal'
import { PurchaseOrderDetail } from '@prisma/client'

interface PriceClientProps {
  data: PriceColumn[]
  length: number
  previousParam: string
  currentParam: string
  poDetail: PurchaseOrderDetail
}

export const PriceClient: React.FC<PriceClientProps> = ({ data, length, previousParam, currentParam, poDetail }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const exportExcel = () => {
    toast('Download excel file successfully.')
  }
  console.log('previousParam:::', previousParam, 'currentParam:::', currentParam)

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
              <BreadcrumbLink href='/products'>Product</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/products/${previousParam}`}>{previousParam}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/products/${previousParam}/skus`}>SKUs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/products/${previousParam}/skus/${currentParam}`}>{currentParam}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Prices</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='flex items-center justify-between '>
        <Heading title={`Prices (${length})`} description='Manage Prices for your store' />
        <div className='flex space-x-2'>
          <Button onClick={() => setIsOpen(true)} className='sm:px-4 sm:py-2 px-2 py-1'>
            <PlusCircle />
            Add New
          </Button>
          <PriceModal isOpen={isOpen} onClose={() => setIsOpen(false)} data={poDetail} />

          <Button onClick={exportExcel} className='sm:px-4 sm:py-2 px-2 py-1 '>
            <DownloadCloudIcon />
            Export File
          </Button>
        </div>
      </div>
      <Separator />
      <div className='bg-white/90 dark:bg-slate-950 rounded-xl p-5'>
        <DataTable searchKey='productSkuId' columns={columns} data={data} />
      </div>
    </div>
  )
}
