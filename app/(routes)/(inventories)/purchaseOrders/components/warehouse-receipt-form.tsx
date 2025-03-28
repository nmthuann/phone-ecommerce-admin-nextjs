'use client'

import * as z from 'zod'
import axios from 'axios'
import { FC, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { CalendarIcon } from 'lucide-react'
import { format, isValid } from 'date-fns'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  receiptNumber: z.string().min(1),
  receiptDate: z.date()
})

type WarehouseReceiptFormValues = z.infer<typeof formSchema>

interface WarehouseReceiptFormProps {
  onClose(): void
  purchaseOrderId: number
}

export const WarehouseReceiptForm: FC<WarehouseReceiptFormProps> = ({ onClose, purchaseOrderId }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const form = useForm<WarehouseReceiptFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      receiptNumber: '',
      receiptDate: new Date()
    }
  })

  const onSubmit = async (data: WarehouseReceiptFormValues) => {
    console.log(`Submit ${JSON.stringify(data, null, 2)} `)

    try {
      setLoading(true)
      await axios.post(`/api/warehouseReceipts`, {
        ...data,
        purchaseOrderId: purchaseOrderId
      })
      onClose()
      router.push(`/purchaseOrders/${purchaseOrderId}/warehouseReceipts`)
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
              name='receiptNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receipt Number</FormLabel>
                  <FormControl>
                    <Input type='text' disabled={loading} placeholder='SKU No . . . ' {...field} />
                  </FormControl>
                  <FormDescription>Receipt Number aculate from VAT + price of Supplier</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='receiptDate'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Order Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                        >
                          {isValid(field.value) ? <span>{format(field.value, 'PPP')}</span> : <span>Invalid Date</span>}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        initialFocus
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        fromYear={new Date(Date.now()).getFullYear()}
                        toYear={new Date().getFullYear() + 20}
                        // disabled={(date: Date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Your date of sale is used to calculate your expired time of discount.
                  </FormDescription>
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
