'use client'

import { DownloadCloudIcon, PlusCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import LoadingOverlay from '@/components/loading-overlay'
import { columns, ProductColumn } from './columns'
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
import { Brand } from '@prisma/client'

interface ProductsClientProps {
  formattedData: ProductColumn[]
  length: number
  brands: Brand[]
}

export const ProductsClient: React.FC<ProductsClientProps> = ({ formattedData, length, brands }) => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [filteredProducts, setFilteredProducts] = useState<ProductColumn[]>(formattedData)

  const exportExcel = () => {
    toastSonner('Download excel file successfully.')
  }

  const handleFilterByBrand = async (brandUrl: string) => {
    setLoading(true)
    try {
      if (!brandUrl) {
        setFilteredProducts(formattedData)
        setLoading(false)
        return
      }
      console.log('brandUrl', brandUrl)
    } catch (error: unknown) {
      toastSonner('Failed to load Products. Please try again.')
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
              <BreadcrumbPage>Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-4 md:space-y-0'>
        <Heading title={`Products (${length})`} description='Manage Products for your store' />
        <div className='flex flex-nowrap items-center space-x-2 overflow-x-auto'>
          <Select onValueChange={value => handleFilterByBrand(value)}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select a brand?' />
            </SelectTrigger>
            <SelectContent>
              {brands.map((brand: Brand) => (
                <SelectItem key={brand.id} value={brand.brandUrl}>
                  {brand.brandName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            onClick={() => {
              setLoading(true)
              router.push(`/products/new`)
            }}
            disabled={loading}
            className='
                  sm:px-4 sm:py-2 px-2 py-1 '
          >
            <PlusCircle className='h-5 w-5' />
            <span className='hidden sm:block ml-2'>Add New</span>
          </Button>

          <Button
            onClick={exportExcel}
            className='
                  sm:px-4 sm:py-2 px-2 py-1'
          >
            <DownloadCloudIcon className='h-5 w-5' />
            <span className='hidden sm:block ml-2'>Export File</span>
          </Button>
        </div>
      </div>
      <Separator />
      <div className='overflow-x-auto'>
        <DataTable columns={columns} defaultData={filteredProducts} />
      </div>
      <LoadingOverlay loading={loading} text='Please wait...' />
    </div>
  )
}
