'use client'

import * as z from 'zod'
import axios from 'axios'
import { FC, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useParams, useRouter } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const formSchema = z.object({
  skuNo: z.string().min(1),
  unitPrice: z.coerce.number().min(1),
  quantity: z.coerce.number().min(1)
})

type PurchaseOrderDetailFormValues = z.infer<typeof formSchema>

interface PurchaseOrderDetailFormProps {
  onClose(): void
}

export const PurchaseOrderDetailForm: FC<PurchaseOrderDetailFormProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const router = useRouter()

  const form = useForm<PurchaseOrderDetailFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skuNo: '',
      unitPrice: 0,
      quantity: 0
    }
  })

  const onSubmit = async (data: PurchaseOrderDetailFormValues) => {
    console.log(`Submit ${JSON.stringify(data, null, 2)} `)

    try {
      setLoading(true)
      await axios.post(`/api/purchaseOrders/${params.id}/details`, {
        ...data,
        purchaseOrderId: parseInt(String(params.id))
      })
      onClose()
      router.push(`/purchaseOrders/${params.id}/details`)
      router.refresh()

      toast.success('Purchase Order Detail created.')
    } catch (error: unknown) {
      console.log(error)
      if (axios.isAxiosError(error)) {
        const status = error.response?.status
        console.log(status)
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 w-full'>
          <div className='space-y-5'>
            <FormField
              control={form.control}
              name='skuNo'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SKU No</FormLabel>
                  <FormControl>
                    <Input type='text' disabled={loading} placeholder='SKU No . . . ' {...field} />
                  </FormControl>
                  <FormDescription>Sku No aculate from VAT + price of Supplier</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='unitPrice'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit Price</FormLabel>
                  <FormControl>
                    <Input type='number' disabled={loading} placeholder='Import Price' {...field} />
                  </FormControl>
                  <FormDescription>Unit Price caculate from VAT + price of Supplier</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='quantity'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>quantity</FormLabel>
                  <FormControl>
                    <Input type='number' disabled={loading} placeholder='Import Price' {...field} />
                  </FormControl>
                  <FormDescription>Quantity caculate from VAT + price of Supplier</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className='ml-auto w-full rounded-xl' type='submit'>
            Create
          </Button>
        </form>
      </Form>
    </div>
  )
}
