'use client'

import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useParams, useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { Heading } from '@/components/ui/heading'
import { Checkbox } from '@/components/ui/checkbox'
import { ProductSku } from '@prisma/client'
import { Attribute } from '@/types/products.type'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { SkuDetailSheet } from './sku-detail-sheet'
import ImageUpload from '@/components/modules/cloudinary/image-upload'

const formSchema = z.object({
  skuNo: z.string().min(1),
  barcode: z.string().min(1),
  skuName: z.string().min(1),
  image: z.string().min(1),
  status: z.boolean().default(false).optional()
})

type SkuFormValues = z.infer<typeof formSchema>

interface SkuFormProps {
  initialData: ProductSku | null
  productId: string
  currentParam: string
}

export const SkuForm: React.FC<SkuFormProps> = ({ initialData, productId, currentParam }) => {
  const params = useParams()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [skuAttributes, setSkuAttributes] = useState<Attribute[]>([])

  const title = initialData ? 'Edit Sku' : 'Create Sku'
  const description = initialData ? 'Edit a Sku.' : 'Add a new Sku'
  const toastMessage = initialData ? 'Sku updated.' : 'Sku created.'
  const action = initialData ? 'Save changes' : 'Create'

  const form = useForm<SkuFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      skuNo: '',
      barcode: '',
      skuName: '',
      image: '',
      status: true
    }
  })

  const onSubmit = async (data: SkuFormValues) => {
    if (skuAttributes.length == 0) {
      toast.error('You have not set up SKU Detail')
      return
    }
    const payload = {
      ...data,
      skuAttributes: skuAttributes // Ensure correct format
    }
    console.log('submit payload', payload)
    try {
      setLoading(true)
      if (initialData) {
        await axios.put(`/api/skus/${params.id}`, payload)
      } else {
        await axios.post(`/api/products/${params.id}/skus`, payload)
      }

      router.push(`/products/${params.id}/skus`)
      router.refresh()
      toast.success(toastMessage)
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status
        const errorMsg = error.response?.data?.message || 'Something went wrong.'

        if (status === 400) {
          toast.error(`Validation Error: ${errorMsg}`)
        } else {
          toast.error('An error occurred. Please try again.')
        }
      } else {
        toast.error('Something went wrong. Please try again.')
      }
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
            <BreadcrumbLink href='/products'>Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/products/${productId}`}>{productId}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentParam}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='flex flex-row items-center justify-between mt-2 mb-2 l'>
        <Heading title={title} description={description} />
        <SkuDetailSheet setSkuAttributesForm={setSkuAttributes} data={skuAttributes} />
      </div>

      <Separator className='mb-5' />

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full'>
            <div className=''>
              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Image</FormLabel>
                    <FormControl>
                      <ImageUpload
                        value={field.value ? [field.value] : []}
                        disabled={loading}
                        onChange={(url: unknown) => field.onChange(url)}
                        onRemove={() => field.onChange('')}
                        imageOptions={{
                          maxFileSize: 300000,
                          maxImageFileSize: 300000,
                          maxImageWidth: 300,
                          maxImageHeight: 300,
                          multiple: false
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='barcode'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Barcode</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder='barcode' type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='skuNo'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sku No</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder='Sku No' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='skuName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sku Name</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder='Sku Name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='status'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} className='m-5 mt-2' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={loading} className='ml-auto w-full rounded-xl' type='submit'>
              {action}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
