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
import { getProductsByBrandUrl } from '@/actions/products/get-products'
import { Brand, ProductResponse } from '@/types/products.type'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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
      const products = await getProductsByBrandUrl(brandUrl, 1, 10)
      // const products = await axios.get('/api/products')
      console.log('Product:::', products)
      if (products.data.length === 0) {
        setFilteredProducts([])
      } else {
        const formattedData: ProductColumn[] | undefined = products.data.map((item: ProductResponse) => ({
          id: String(item.id),
          productName: item.productName,
          productLine: item.productLine,
          status: item.status,
          slug: item.slug,
          description: item.description,
          productSpecs: item.productSpecs,
          categoryName: item.categoryName,
          categoryUrl: item.categoryUrl,
          brandName: item.brandName,
          brandUrl: item.brandUrl
          // skus: item.skus
        }))
        setFilteredProducts(formattedData)
      }
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
        <DataTable columns={columns} defaultData={filteredProducts} />
      </div>
      <LoadingOverlay loading={loading} text='Please wait...' />
    </div>
  )
}
