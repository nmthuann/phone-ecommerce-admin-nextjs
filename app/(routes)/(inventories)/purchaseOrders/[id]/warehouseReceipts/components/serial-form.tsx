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
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react'
import { format, isValid } from 'date-fns'
import { cn } from '@/lib/utils'
import { ProductSku } from '@prisma/client'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'

const formSchema = z.object({
  serialNumber: z.string().min(1),
  dateManufactured: z.date(),
  productSkuId: z.coerce.number().min(1)
})

type SerialFormValues = z.infer<typeof formSchema>

interface SerialFormProps {
  onClose(): void
  purchaseOrderId: number
  skus: ProductSku[]
  warehouseReceiptId: number
}

export const SerialForm: FC<SerialFormProps> = ({ onClose, purchaseOrderId, skus, warehouseReceiptId }) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const form = useForm<SerialFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serialNumber: '',
      dateManufactured: new Date(),
      productSkuId: 0
    }
  })

  const onSubmit = async (data: SerialFormValues) => {
    console.log(`Submit ${JSON.stringify(data, null, 2)} `)

    try {
      setLoading(true)
      await axios.post(`/api/productSerials`, {
        ...data,
        warehouseReceiptId: warehouseReceiptId
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
            {/* SKU */}
            <FormField
              control={form.control}
              name='productSkuId'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>SKU</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant='outline'
                          // role='combobox'
                          className={cn('w-full justify-between', !field.value && 'text-muted-foreground')}
                        >
                          {field.value ? skus.find(sku => sku.id === field.value)?.skuName : 'Select SKU'}
                          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-full p-0'>
                      <Command>
                        <CommandInput placeholder='Search supplier...' />
                        <CommandList>
                          <CommandEmpty>No Supplier found.</CommandEmpty>
                          <CommandGroup>
                            {skus.map(sku => (
                              <CommandItem
                                value={String(sku.skuName)}
                                key={sku.id}
                                onSelect={() => {
                                  form.setValue('productSkuId', sku.id)
                                }}
                              >
                                {sku.skuName}
                                <Check
                                  className={cn('ml-auto', sku.id === field.value ? 'opacity-100' : 'opacity-0')}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>This is the language that will be used in the dashboard.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='serialNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Serial Number</FormLabel>
                  <FormControl>
                    <Input type='text' disabled={loading} placeholder='Serial Number . . . ' {...field} />
                  </FormControl>
                  <FormDescription>RSerial Number aculate from VAT + price of Supplier</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='dateManufactured'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>DateManufactured</FormLabel>
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
                        fromYear={new Date(Date.now()).getFullYear() - 5}
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
