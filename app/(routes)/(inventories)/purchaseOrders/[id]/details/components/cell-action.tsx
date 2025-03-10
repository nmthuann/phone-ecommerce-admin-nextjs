'use client'

import { Copy, Edit, MoreHorizontal } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { PurchaseOrderDetailColumn } from './columns'

interface CellActionProps {
  data: PurchaseOrderDetailColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter()
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast.success('Category ID copied to clipboard.')
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.orderNumber)}>
            <Copy className='mr-2 h-4 w-4' /> Copy order Number
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Edit className='mr-2 h-4 w-4' /> Update Detail
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`/purchasOrder/${data.id}/warehouseReceipt`)}>
            <Edit className='mr-2 h-4 w-4' /> Inport Warehouse Receipt
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
