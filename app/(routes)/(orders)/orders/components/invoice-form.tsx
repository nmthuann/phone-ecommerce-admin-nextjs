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
  invoiceCode: z.string().min(1),
  taxCode: z.string().min(1),
  notes: z.string().min(1).optional()
})

type InvoiceFormValues = z.infer<typeof formSchema>

interface InvoiceFormProps {
  onClose(): void
  orderId: string
}

export const InvoiceForm: FC<InvoiceFormProps> = ({ onClose, orderId }) => {
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const router = useRouter()

  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  })

  const onSubmit = async (data: InvoiceFormValues) => {
    console.log(`Submit ${JSON.stringify(data, null, 2)} `)

    try {
      setLoading(true)
      await axios.post(`/api/invoices`, {
        ...data,
        orderId: orderId
      })
      onClose()
      router.push(`/orders/${params.id}`)
      router.refresh()

      toast.success('Invoice created.')
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
              name='invoiceCode'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invoice Code</FormLabel>
                  <FormControl>
                    <Input type='text' disabled={loading} placeholder='Invoice Code . . . ' {...field} />
                  </FormControl>
                  <FormDescription>
                    Unique identifier for the invoice, can be manually entered or system-generated.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='taxCode'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tax Code</FormLabel>
                  <FormControl>
                    <Input type='text' disabled={loading} placeholder='Tax Code' {...field} />
                  </FormControl>
                  <FormDescription>
                    The tax identification number of the buyer or seller, used for tax reporting.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='notes'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Input type='text' disabled={loading} placeholder='Import Price' {...field} />
                  </FormControl>
                  <FormDescription>
                    Optional field for adding remarks or extra information about the invoice.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className='ml-auto w-full rounded-xl' type='submit'>
            {'Create'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
