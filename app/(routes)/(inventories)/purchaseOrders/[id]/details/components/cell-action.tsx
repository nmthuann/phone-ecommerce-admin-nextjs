'use client'

import { Copy, Edit, MoreHorizontal } from 'lucide-react'
import { toast } from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { PurchaseOrderDetailColumn } from './columns'
import PurchaseOrderDetailModal from './po-detail-modal'
import { useState } from 'react'

interface CellActionProps {
  data: PurchaseOrderDetailColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
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
            <Copy className='mr-2 h-4 w-4' /> Copy Order Number
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsOpen(true)}>
            <Edit className='mr-2 h-4 w-4' /> Update Detail
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <PurchaseOrderDetailModal isOpen={isOpen} onClose={() => setIsOpen(false)} poDetailColsData={data} />
    </div>
  )
}
