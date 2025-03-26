'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem } from '@/components/ui/form'
import toast from 'react-hot-toast'
import { Attribute } from '@/types/products.type'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Edit, MinusCircle, PlusCircle } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Key } from 'react'
import { Input } from '@/components/ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface SkuDetailSheetProps {
  setSkuAttributesForm: (attributes: Attribute[]) => void
  data: Attribute[]
}

const formSchema = z.object({
  skuAttributes: z.array(
    z.object({
      key: z.string().min(1, 'Key is required'),
      value: z.string().min(1, 'Value is required')
    })
  )
})

type SkuDetailFormValues = z.infer<typeof formSchema>

export const SkuDetailSheet: React.FC<SkuDetailSheetProps> = ({ setSkuAttributesForm, data }) => {
  const title = data ? 'Edit Sku Detail' : 'Create Sku Detail'

  const toastMessage = data ? 'Sku updated Successfully.' : 'Sku Detail created Successfully.'

  const form = useForm<SkuDetailFormValues>({
    resolver: zodResolver(formSchema)
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'skuAttributes'
  })

  const onSubmit = async (data: SkuDetailFormValues) => {
    setSkuAttributesForm(data.skuAttributes)
    toast.success(toastMessage)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='sm' color='primary' className='font-medium'>
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
                name='skuAttributes'
                render={() => (
                  <FormItem>
                    <FormControl>
                      <div className='flex flex-col gap-4 mt-5 mb-5'>
                        {fields.map(
                          (
                            inputField: {
                              id: Key | null | undefined
                            },
                            index: unknown
                          ) => (
                            <div key={inputField.id} className='flex space-x-4 items-center'>
                              <Input
                                type='text'
                                className='max-w-xs'
                                {...form.register(`skuAttributes.${index as number}.key`)}
                              />

                              <Input
                                type='text'
                                className='max-w-xs'
                                {...form.register(`skuAttributes.${index as number}.value`)}
                              />

                              <div className='flex items-center space-x-2'>
                                <Button
                                  aria-label='remove'
                                  onClick={() => {
                                    if (fields.length > 1) {
                                      remove(index as number)
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

              <SheetClose asChild>
                {/* <Tooltip content='Please fill in all required fields.' placement='top' color='warning'>
                  <Button type='submit' size='md' color='primary' radius='lg' className='font-medium w-full'>
                    {!form.formState.isValid ? 'No Confirm' : 'Confirm'}
                  </Button>
                </Tooltip> */}
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
