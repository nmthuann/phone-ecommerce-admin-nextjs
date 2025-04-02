'use client'

import { DownloadCloudIcon, PlusCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'

import { columns, SupplierColumn } from './columns'
import { useState } from 'react'
import LoadingOverlay from '@/components/loading-overlay'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import toast from 'react-hot-toast'

interface SupplierClientProps {
  data: SupplierColumn[]
}

export const SupplierClient: React.FC<SupplierClientProps> = ({ data }) => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const exportExcel = () => {
    toast.success('Download excel file successfully.')
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
            <BreadcrumbPage>Suppliers</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='flex items-center justify-between'>
        <Heading title={`Suppliers (${data.length})`} description='Manage Suppliers for your store' />
        <div className='flex flex-nowrap items-center space-x-2 overflow-x-auto'>
          <Button
            onClick={() => {
              setLoading(true)
              router.push(`/suppliers/new`)
            }}
            disabled={loading}
            className='
                  sm:px-4 sm:py-2 px-2 py-1 cursor-pointer'
          >
            <PlusCircle className='h-6 w-6' />
            <span className='hidden sm:block ml-2'>Add New</span>
          </Button>

          <Button
            onClick={exportExcel}
            className='  
                   sm:px-4 sm:py-2 px-2 py-1 cursor-pointer'
          >
            <DownloadCloudIcon className='h-6 w-6' />
            <span className='hidden sm:block ml-2'>Export File</span>
          </Button>
        </div>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <LoadingOverlay loading={loading} />
    </div>
  )
}
