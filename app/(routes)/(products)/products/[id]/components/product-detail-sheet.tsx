'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit, MinusCircle, PlusCircle } from 'lucide-react'
import { Key } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import toast from 'react-hot-toast'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Attribute } from '@/types/products.type'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export type ProductDetail = {
  productSpecs: Attribute[]
  description: string
}

interface ProductDetailSheetProps {
  setProductSpecsForm: (specs: Attribute[]) => void
  setDescriptionForm: (des: string) => void
  initDetail: ProductDetail
}

const formSchema = z.object({
  productSpecs: z.array(
    z.object({
      key: z.string().min(1, 'Key is required'),
      value: z.string().min(1, 'Value is required')
    })
  ),
  description: z.string().min(1, 'Description is required')
})

type ProductDetailFormValues = z.infer<typeof formSchema>

export const ProductDetailSheet: React.FC<ProductDetailSheetProps> = ({
  setProductSpecsForm,
  setDescriptionForm,
  initDetail
}) => {
  const title = initDetail.description != '' ? 'Edit Product Detail' : 'Create Product Detail'

  const toastMessage =
    initDetail.description != '' ? 'Product Detail updated Successfully.' : 'Product Detail created Successfully.'

  const form = useForm<ProductDetailFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productSpecs: (initDetail.productSpecs || [{ key: '', value: '' }]) as { key: string; value: string }[],
      description: initDetail.description || ''
    }
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'productSpecs'
  })

  const onSubmit = async (data: ProductDetailFormValues) => {
    setProductSpecsForm(data.productSpecs)
    setDescriptionForm(data.description)
    console.log(data)
    toast.success(toastMessage)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='font-medium'>
          <Edit className='h-4 w-4' /> {title}
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you are done.</SheetDescription>
        </SheetHeader>
        <ScrollArea className='h-3/4 w-full rounded-md p-3 mb-5'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
              <FormField
                control={form.control}
                name='productSpecs'
                render={() => (
                  <FormItem>
                    <FormControl>
                      <div className='flex flex-col gap-4 mt-5 mb-5'>
                        {fields.map(
                          (
                            inputField: {
                              id: Key | null | undefined
                            },
                            index: number
                          ) => (
                            <div key={inputField.id} className='flex space-x-4 items-center'>
                              <Input
                                type='text'
                                className='max-w-xs'
                                {...form.register(`productSpecs.${index}.key` as const)}
                              />

                              <Input
                                type='text'
                                className='max-w-xs'
                                {...form.register(`productSpecs.${index}.value` as const)}
                              />

                              <div className='flex items-center space-x-2'>
                                <Button
                                  aria-label='remove'
                                  onClick={() => {
                                    if (fields.length > 1) {
                                      remove(index)
                                    }
                                  }}
                                  disabled={fields.length <= 1}
                                >
                                  <MinusCircle />
                                </Button>
                                <Button
                                  aria-label='add'
                                  onClick={() =>
                                    append({
                                      key: '',
                                      value: ''
                                    })
                                  }
                                >
                                  <PlusCircle />
                                </Button>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </FormControl>
                    <FormDescription>Add SKU attributes here.</FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder='Type your Description here.'
                        // className={{
                        //   base: 'w-full mb-5',
                        //   input: 'resize-y min-h-[40px]'
                        // }}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SheetClose asChild>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button type='submit' className='font-medium w-full'>
                        {!form.formState.isValid ? 'No Confirm' : 'Confirm'}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Please fill in all required fields</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </SheetClose>
            </form>
          </Form>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
