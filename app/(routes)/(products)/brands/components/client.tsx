'use client'

import { DownloadCloudIcon, PlusCircle } from 'lucide-react'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { BrandColumn, columns } from './columns'
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
import { useRouter } from 'next/navigation'

interface BrandClientProps {
  brands: BrandColumn[]
}

export const BrandClient: React.FC<BrandClientProps> = ({ brands }) => {
  const exportExcel = () => {
    toast('Download excel file successfully.')
  }
  const router = useRouter()

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
              <BreadcrumbPage>Brands</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='flex items-center justify-between '>
        <Heading title={`Brands (${brands.length})`} description='Manage Brands for your store' />
        <div className='flex space-x-2'>
          <Button onClick={() => router.push(`/brands/new`)} className='sm:px-4 sm:py-2 px-2 py-1'>
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
        <DataTable searchKey='brandName' columns={columns} data={brands} />
      </div>
    </div>
  )
}
