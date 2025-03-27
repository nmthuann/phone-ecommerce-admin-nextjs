'use client'

import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Brand, Product } from '@prisma/client'
import { useParams, useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { Heading } from '@/components/ui/heading'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { ProductDetail, ProductDetailSheet } from './product-detail-sheet'
import { Attribute } from '@/types/products.type'
import { Checkbox } from '@/components/ui/checkbox'
import { convertJsonToAttributes } from '@/utils/convert'

const formSchema = z.object({
  productName: z.string().min(1),
  productLine: z.string().min(1),
  status: z.boolean().default(false).optional(),
  brandId: z.coerce.number().min(1)
})

type ProductFormValues = z.infer<typeof formSchema>

interface ProductFormProps {
  initialData: Product | null
  brands: Brand[]
}

export const ProductForm: React.FC<ProductFormProps> = ({ initialData, brands }) => {
  const params = useParams()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [productSpecs, setProductSpecs] = useState<Attribute[]>([])
  const [productDesc, setProductDesc] = useState<string>('')

  const title = initialData ? 'Edit product' : 'Create product'
  const description = initialData ? 'Edit a product.' : 'Add a new product'
  const toastMessage = initialData ? 'Product updated.' : 'Product created.'
  const action = initialData ? 'Save changes' : 'Create'

  const defaultValues = initialData
    ? {
        ...initialData,
        productSpecs: initialData.productSpecs as Record<string, unknown>
      }
    : {
        productName: '',
        productLine: '',
        status: true,
        description: ''
      }

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues
  })

  const onSubmit = async (data: ProductFormValues) => {
    if (productSpecs.length == 0 || productDesc == '') {
      toast.error('You have not set up Product Detail')
      return
    }
    const payload = {
      ...data,
      productSpecs: productSpecs,
      description: productDesc
    }

    try {
      setLoading(true)
      if (initialData) {
        await axios.patch(`/api/products/${params.id}`, payload)
      } else {
        console.log(`Submit ${JSON.stringify(payload, null, 2)} `)
        await axios.post(`/api/products`, payload)
      }
      router.push(`/products`)
      router.refresh()
      toast.success(toastMessage)
    } catch (error: unknown) {
      console.log(error)
      toast.error('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const productDetail: ProductDetail = initialData
    ? {
        productSpecs: convertJsonToAttributes(initialData.productSpecs as Record<string, string>),
        description: initialData.description
      }
    : {
        productSpecs: [
          {
            key: '',
            value: ''
          }
        ],
        description: ''
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
              <BreadcrumbPage>{initialData?.id ?? 'new'}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className='flex items-center justify-between'>
          <Heading title={title} description={description} />
          <ProductDetailSheet
            setProductSpecsForm={setProductSpecs}
            setDescriptionForm={setProductDesc}
            initDetail={productDetail}
          />
        </div>
        <Separator />
      </div>

      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='max-w-md mx-auto space-y-6 p-6 bg-white shadow-md border-1 rounded-lg mt-5'
        >
          <FormField
            control={form.control}
            name='productName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder='Product name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='productLine'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Line</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder='Product Line' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='brandId'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Brand</FormLabel>
                <Select
                  disabled={loading}
                  onValueChange={field.onChange}
                  value={String(field.value)}
                  defaultValue={String(field.value)}
                >
                  <FormControl>
                    <SelectTrigger className='w-full'>
                      <SelectValue defaultValue={field.value} placeholder='Select a Brand' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {brands.map(brand => (
                      <SelectItem key={brand.id} value={String(brand.id)}>
                        {brand.brandName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='status'
            render={({ field }) => (
              <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4'>
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className='space-y-1 leading-none'>
                  <FormLabel>Satus</FormLabel>
                  <FormDescription>This product will appear on the home page</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <Button disabled={loading} className='ml-auto w-full' type='submit'>
            {action}
          </Button>
        </form>
      </Form>
    </div>
  )
}
