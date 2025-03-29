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

interface DataTableRowActionsProps {
  dataRow: OrderColumn
}

export function DataTableRowActions({ dataRow }: Readonly<DataTableRowActionsProps>) {
  const router = useRouter()
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast.success(`Purchase Order ${Messages.COPY_ID}`)
  }

  return (
    <div>
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
          <DropdownMenuItem>
            {/* onClick={() => router.push(`orders/${dataRow.id}`)} */}
            <Edit />
            Edit Order
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`orders/${dataRow.id}`)}>
            <List />
            View Detail
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
