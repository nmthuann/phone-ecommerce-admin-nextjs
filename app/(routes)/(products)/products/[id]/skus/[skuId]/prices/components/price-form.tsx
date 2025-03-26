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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import { format } from 'date-fns'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'

const formSchema = z.object({
  sellingPrice: z.coerce.number().min(1),
  displayPrice: z.coerce.number().min(1),
  beginAt: z.coerce.date(),
  unitPrice: z.coerce.number().min(1)
})

type PriceFormValues = z.infer<typeof formSchema>

export const PriceForm = () => {
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const router = useRouter()

  const form = useForm<PriceFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sellingPrice: 0,
      displayPrice: 0,
      beginAt: new Date(),
      unitPrice: 0
    }
  })

  const onSubmit = async (data: PriceFormValues) => {
    console.log(`Submit ${JSON.stringify(data, null, 2)} `)

    try {
      setLoading(true)
      await axios.post(`/api/skus/${params.skuId}/prices`, data)
      router.push(`/products/${params.id}/skus/${params.skuId}/prices`)
      router.refresh()
      toast.success('Price created.')
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
              name='sellingPrice'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Selling Price</FormLabel>
                  <FormControl>
                    <Input type='number' disabled={loading} placeholder='Import Price' {...field} />
                  </FormControl>
                  <FormDescription>Import Price caculate from VAT + price of Supplier</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='displayPrice'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display Price</FormLabel>
                  <FormControl>
                    <Input type='number' disabled={loading} placeholder='Import Price' {...field} />
                  </FormControl>
                  <FormDescription>Import Price caculate from VAT + price of Supplier</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='beginAt'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Begin At</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[240px] pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={date => date > new Date() || date < new Date('1900-01-01')}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Your date of the price begin is used to apply your unit price.</FormDescription>
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
