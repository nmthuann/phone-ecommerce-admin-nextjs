'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Heading } from '@/components/ui/heading'
import { useAuthContext } from '@/providers/auth-provider'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { PurchaseOrderResponse, Supplier } from '@/types/inventories.type'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { format, isValid } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'

const formSchema = z.object({
  orderDate: z.date(),
  supplierId: z.coerce.number().min(1)
})

type PurchaseOrderFormValues = z.infer<typeof formSchema>

interface PurchaseOrderFormProps {
  initialData?: PurchaseOrderResponse | null
  suppliers: Supplier[]
}

export const PurchaseOrderForm: React.FC<PurchaseOrderFormProps> = ({ initialData, suppliers }) => {
  const router = useRouter()
  const { handleLogout } = useAuthContext()
  const [loading, setLoading] = useState(false)

  const title = initialData ? 'Edit Purchase Order' : 'Create Purchase Order'
  const description = initialData ? 'Edit a Purchase Order.' : 'Add a new Purchase Order'
  const toastMessage = initialData ? 'Purchase Order updated.' : 'Purchase Order created.'
  const action = initialData ? 'Save changes' : 'Create'

  const form = useForm<PurchaseOrderFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      orderDate: new Date(),
      supplierId: 0
    }
  })

  const onSubmit = async (data: PurchaseOrderFormValues) => {
    console.log('submit payload', data)
    try {
      setLoading(true)
      if (initialData) {
        console.log(`Submit POST:: ${JSON.stringify(data, null, 2)} `)
      } else {
        console.log(`Submit PUT:: ${JSON.stringify(data, null, 2)} `)
      }
      router.push(`/purchaseOrders`)
      router.refresh()
      toast.success(toastMessage)
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status
        const errorMsg = error.response?.data?.message || 'Something went wrong.'

        if (status === 400) {
          toast.error(`Validation Error: ${errorMsg}`)
        } else if (status === 403) {
          handleLogout()
          toast.error('Vui lòng đăng nhập lại.')
          router.push('/login')
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
            <BreadcrumbLink href='/purchaseOrders'>Purchase Orders</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{initialData ? initialData.id : 'Add New'}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='flex flex-col md:flex-row items-start md:items-center justify-between  m-2'>
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full p-4'>
          <div className='lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name='orderDate'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Order Date</FormLabel>
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
                        disabled={(date: Date) => date < new Date()}
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

            {/* Supplier */}
            <FormField
              control={form.control}
              name='supplierId'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Supplier</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant='outline'
                          role='combobox'
                          className={cn('w-[200px] justify-between', !field.value && 'text-muted-foreground')}
                        >
                          {field.value
                            ? suppliers.find(supplier => supplier.id === field.value)?.id
                            : 'Select Supplier'}
                          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-[200px] p-0'>
                      <Command>
                        <CommandInput placeholder='Search language...' />
                        <CommandList>
                          <CommandEmpty>No Supplier found.</CommandEmpty>
                          <CommandGroup>
                            {suppliers.map(supplier => (
                              <CommandItem
                                value={String(supplier.id)}
                                key={supplier.id}
                                onSelect={() => {
                                  form.setValue('supplierId', supplier.id)
                                }}
                              >
                                {supplier.name}
                                <Check
                                  className={cn('ml-auto', supplier.id === field.value ? 'opacity-100' : 'opacity-0')}
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
          </div>

          <Button disabled={loading} className='ml-auto w-full rounded-lg' type='submit'>
            {action}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default PurchaseOrderForm
