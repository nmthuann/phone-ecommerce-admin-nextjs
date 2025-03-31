'use client'

import { ClipboardPlus, Copy, Edit, Ellipsis, List } from 'lucide-react'

import toast from 'react-hot-toast'
import { Messages } from '@/constants/message.enum'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { useRouter } from 'next/navigation'
import { OrderColumn } from './columns'
import { OrderStatus } from '@/constants/order-status.enum'
import { useState } from 'react'
import { AlertModal } from '@/components/alert-modal'
import axios from 'axios'

interface DataTableRowActionsProps {
  dataRow: OrderColumn
}

export function DataTableRowActions({ dataRow }: Readonly<DataTableRowActionsProps>) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast.success(`Purchase Order ${Messages.COPY_ID}`)
  }

  const onConfirm = async () => {
    try {
      setLoading(true)
      if (dataRow.status === OrderStatus.COMPLETED) {
        toast.success('Order is completed!')
      } else {
        await axios.patch(`/api/orders/${dataRow.id}`, {
          status: OrderStatus.COMPLETED
        })
        toast.success('Order is completed.')
        router.push('/orders')
        router.refresh()
      }
    } catch (error: unknown) {
      console.log(error)
      toast.error('Make sure you removed all categories using this Supplier first.')
    } finally {
      setOpen(false)
      setLoading(false)
    }
  }

  return (
    <div>
      <AlertModal isOpen={open} onClose={() => setOpen(false)} onConfirm={onConfirm} loading={loading} />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Ellipsis className='w-4 h-4' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Order Options </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => onCopy(dataRow.id)}>
            <Copy />
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Edit />
            Update Status
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`orders/${dataRow.id}`)}>
            <List />
            View Order Detail
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={dataRow.status !== OrderStatus.COMPLETED}
            onClick={() => console.log('Export Invoice')}
          >
            <ClipboardPlus />
            Export Invoice
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
