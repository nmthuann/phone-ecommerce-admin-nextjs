'use client'

import * as z from 'zod'
import axios from 'axios'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { ChevronDownIcon, Trash } from 'lucide-react'
import { Supplier } from '@prisma/client'
import { useParams, useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button, buttonVariants } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { Heading } from '@/components/ui/heading'
import { cn } from '@/lib/utils'
import { City, Districts, Wards } from '@/types/location.type'
import { AlertModal } from '@/components/alert-modal'

const formSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().min(1),
  city: z.string().min(1),
  district: z.string().min(1),
  ward: z.string().min(1)
})

type SupplierFormValues = z.infer<typeof formSchema>

interface SupplierFormProps {
  initialData: Supplier | null
  location: City[]
}

export const SupplierForm: React.FC<SupplierFormProps> = ({ initialData, location }) => {
  const params = useParams()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [city, setCity] = useState<string>('')
  const [districtList, setDistrictList] = useState<Districts[]>([])
  const [district, setDistrict] = useState<string>('')
  const [wardList, setWardList] = useState<Wards[]>([])

  const title = initialData ? 'Edit Supplier' : 'Create Supplier'
  const description = initialData ? 'Edit a Supplier.' : 'Add a new Supplier'
  const toastMessage = initialData ? 'Supplier updated.' : 'Supplier created.'
  const action = initialData ? 'Save changes' : 'Create'

  const form = useForm<SupplierFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: '',
      address: '',
      phone: '',
      email: ''
    }
  })

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //React.ChangeEvent<HTMLInputElement>
    const selectedCityId: string = event.target.value
    console.log('selectedCityId:::', city)
    setCity(selectedCityId)
    const selectedDistricts: City | undefined = location.find((city: City) => city.Name === selectedCityId)
    console.log('selectedDistricts:::', selectedDistricts)
    if (selectedDistricts) {
      setDistrictList(selectedDistricts.Districts || [])
    } else {
      setDistrictList([])
    }
  }

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //React.ChangeEvent<HTMLInputElement>
    const selectedDistrictId: string = event.target.value
    console.log('selectedCityId:::', district)
    setDistrict(selectedDistrictId)
    const selectedWards: Districts | undefined = districtList.find(
      (city: Districts) => city.Name === selectedDistrictId
    )
    console.log('selectedWards:::', selectedWards)
    if (selectedWards) {
      setWardList(selectedWards.Wards || [])
    } else {
      setWardList([])
    }
  }

  const onSubmit = async (data: SupplierFormValues) => {
    const city = data.city
    const district = data.district
    const ward = data.ward
    const fullAddress = `${data.address}, ${ward}, ${district}, ${city}`
    try {
      setLoading(true)
      if (initialData) {
        await axios.patch(`/api/suppliers/${params.id}`, {
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: fullAddress
        })
      } else {
        await axios.post(`/api/suppliers`, {
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: fullAddress
        })
      }

      router.push(`/suppliers`)
      router.refresh()
      toast.success(toastMessage)
    } catch (error: unknown) {
      console.log(error)
      toast.error('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const onDelete = async () => {
    try {
      setLoading(true)
      await axios.delete(`/api/suppliers/${params.id}`)
      router.refresh()
      router.push(`/${params.storeId}/suppliers`)
      toast.success('Supplier deleted.')
    } catch (error: unknown) {
      console.log(error)
      toast.error('Make sure you removed all categories using this Supplier first.')
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={onDelete} loading={loading} />
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
          className='max-w-md mx-auto space-y-5 p-6 bg-white shadow-md border-1 rounded-lg mt-5'
        >
          <div className='flex flex-row space-x-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder='Supplier Name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder='Supplier Phone' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder='Supplier Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='city'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tỉnh Thành</FormLabel>
                <div className='relative w-max'>
                  <FormControl>
                    <select
                      onChangeCapture={handleCityChange}
                      className={cn(
                        buttonVariants({
                          variant: 'outline'
                        }),
                        'w-[calc(100vw/4)] appearance-none bg-transparent font-normal'
                      )}
                      {...field}
                    >
                      {location.map((city: City) => (
                        <option key={city.Id} value={city.Name}>
                          {city.Name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <ChevronDownIcon className='absolute right-3 top-2.5 h-4 w-4 opacity-50' />
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='district'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quận/ Huyện</FormLabel>
                <div className='relative w-max'>
                  <FormControl>
                    <select
                      onChangeCapture={handleDistrictChange}
                      className={cn(
                        buttonVariants({
                          variant: 'outline'
                        }),
                        'w-[calc(100vw/4)] appearance-none bg-transparent font-normal'
                      )}
                      {...field}
                    >
                      {districtList.map((district: Districts) => (
                        <option key={district.Id} value={district.Name}>
                          {district.Name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <ChevronDownIcon className='absolute right-3 top-2.5 h-4 w-4 opacity-50' />
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='ward'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phường/ Xã</FormLabel>
                <div className='relative w-max'>
                  <FormControl>
                    <select
                      className={cn(
                        buttonVariants({
                          variant: 'outline'
                        }),
                        'w-[calc(100vw/4)] appearance-none bg-transparent font-normal'
                      )}
                      {...field}
                    >
                      {wardList.map((ward: Wards) => (
                        <option key={ward.Id} value={ward.Name}>
                          {ward.Name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <ChevronDownIcon className='absolute right-3 top-2.5 h-4 w-4 opacity-50' />
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* Địa Chỉ */}
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Địa Chỉ</FormLabel>
                <FormControl>
                  <Input placeholder='Your Address' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* </div> */}
          <Button disabled={loading} className='ml-auto w-full' type='submit'>
            {action}
          </Button>
        </form>
      </Form>
    </>
  )
}
