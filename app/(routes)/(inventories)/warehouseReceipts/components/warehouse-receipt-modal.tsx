'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { FC, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { PurchaseOrder } from '@prisma/client'
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

interface WarehouseReceiptModalProps {
  isOpen: boolean
  onClose: () => void
}

const FormSchema = z.object({
  orderNumber: z.string().min(2, {
    message: 'orderNumber must be at least 2 characters.'
  })
})

const WarehouseReceiptModal: FC<WarehouseReceiptModalProps> = ({ isOpen, onClose }) => {
  const [purchaseOrder, setPurchaseOrder] = useState<PurchaseOrder>()
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      orderNumber: ''
    }
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true)
      const response = await axios.get(`/api/purchaseOrders?orderNumber=${data.orderNumber}`)
      setPurchaseOrder(response.data)
    } catch (error: unknown) {
      console.error(error)
      toast.error('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
              <FormField
                control={form.control}
                name='orderNumber'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Order Number</FormLabel>
                    <FormControl>
                      <Input placeholder='order Number' {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' disabled={loading}>
                {loading ? <Loader2 className='animate-spin mr-2' size={18} /> : 'Search'}
              </Button>
            </form>
          </Form>

          {purchaseOrder ? <div>{purchaseOrder.id}</div> : <div>No result</div>}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default WarehouseReceiptModal
