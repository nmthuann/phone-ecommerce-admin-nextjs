'use client'

import { DownloadCloudIcon, PlusCircle } from 'lucide-react'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { columns, ProductSkuColumn } from './columns'
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

interface ProductSkuClientProps {
  skus: ProductSkuColumn[]
  length: number
  currentParam: string
}

export const ProductSkuClient: React.FC<ProductSkuClientProps> = ({ skus, length, currentParam }) => {
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
              <BreadcrumbLink href='/products'>Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/products/${currentParam}`}>{currentParam}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Skus</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='flex items-center justify-between '>
        <Heading title={`Product Skus (${length})`} description='Manage Product Skus for your store' />
        <div className='flex space-x-2'>
          <Button
            onClick={() => console.log('onClick Add New')}
            className='bg-white text-black dark:bg-slate-950 dark:text-white hover:text-white hover:bg-slate-500 
                        sm:px-4 sm:py-2 px-2 py-1 text-sm sm:text-base'
          >
            <PlusCircle />
            Add New
          </Button>

          <Button
            onClick={exportExcel}
            className='bg-white text-black dark:bg-slate-950 dark:text-white hover:text-white hover:bg-slate-500  
                        sm:px-4 sm:py-2 px-2 py-1 text-sm sm:text-base'
          >
            <DownloadCloudIcon />
            Export File
          </Button>
        </div>
      </div>
      <Separator />
      <div className='bg-white/90 dark:bg-slate-950 rounded-xl p-5'>
        <DataTable searchKey='skuName' columns={columns} data={skus} />
      </div>
    </div>
  )
}
