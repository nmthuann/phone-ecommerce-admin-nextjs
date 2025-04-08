'use client'

import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Trash } from 'lucide-react'
import { Brand } from '@prisma/client'
import { useParams, useRouter } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { Heading } from '@/components/ui/heading'
import { AlertModal } from '@/components/alert-modal'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

const formSchema = z.object({
  brandName: z.string().min(1),
  brandAbbreviation: z.string().min(1),
  description: z.string().min(1)
})

type BrandFormValues = z.infer<typeof formSchema>

interface BrandFormProps {
  initialData: Brand | null
}

export const BrandForm: React.FC<BrandFormProps> = ({ initialData }) => {
  const params = useParams()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const title = initialData ? 'Edit brand' : 'Create brand'
  const description = initialData ? 'Edit a brand.' : 'Add a new brand'
  const toastMessage = initialData ? 'brand updated.' : 'brand created.'
  const action = initialData ? 'Save changes' : 'Create'

  const form = useForm<BrandFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      brandName: '',
      description: '',
      brandAbbreviation: ''
    }
  })

  const onSubmit = async (data: BrandFormValues) => {
    try {
      setLoading(true)
      if (initialData) {
        await axios.patch(`/api/brands/${params.id}`, data)
      } else {
        await axios.post(`/api/brands`, data)
      }

      router.push(`/brands`)
      router.refresh()
      toast.success(toastMessage)
    } catch (error: unknown) {
      // console.log(error)
      // toast.error('Something went wrong.')
      // Kiểm tra nếu là lỗi từ Axios
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          toast.error('Please Login again.')
          router.push('/sign-in')
        } else {
          toast.error(error.response?.data?.message || 'Đã xảy ra lỗi.')
        }
      } else {
        toast.error('Something went wrong.')
      }
    } finally {
      setLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(`/api/brands/${params.brandId}`)
      router.refresh()
      router.push(`/brands`)
      toast.success('brand deleted.')
    } catch (error: unknown) {
      console.log(error)

      toast.error('Make sure you removed all categories using this brand first.')
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={onDelete} loading={loading} />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/brands'>Brands</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{initialData?.id ?? 'new'}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='flex items-center justify-between'>
        <Heading title={title} description={description} />
        {initialData && (
          <Button disabled={loading} variant='destructive' size='sm' onClick={() => setOpen(true)}>
            <Trash className='h-4 w-4' />
          </Button>
        )}
      </div>

      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='max-w-md mx-auto space-y-6 p-6 bg-white shadow-md border-1 rounded-lg mt-5'
        >
          <FormField
            control={form.control}
            name='brandName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder='brand Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='brandAbbreviation'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Abbreviation</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder='Brand Abbreviation' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder='brand Description' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className='ml-auto w-full' type='submit'>
            {action}
          </Button>
        </form>
      </Form>
    </>
  )
}
