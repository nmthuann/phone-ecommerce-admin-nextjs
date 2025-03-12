'use client'

import { Copy, Edit, Ellipsis, List } from 'lucide-react'

import toast from 'react-hot-toast'
import { Messages } from '@/constants/notifications/message'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { useRouter } from 'next/navigation'
import { ProductColumn } from './columns'
import ProductDetailDialog from './product-detail-dialog'
import { useState } from 'react'

interface DataTableRowActionsProps {
  dataRow: ProductColumn
}

export function DataTableRowActions({ dataRow }: Readonly<DataTableRowActionsProps>) {
  const router = useRouter()
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast.success(`Purchase Order ${Messages.COPY_ID}`)
  }
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOnClickViewDetail = () => {
    setIsOpen(true)
  }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Ellipsis className='w-4 h-4' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Purchase Order Options </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => onCopy(dataRow.id)}>
            <Copy />
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`purchaseOrders/${dataRow.id}`)}>
            <Edit />
            Edit Purchase Order
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleOnClickViewDetail}>
            <List />
            View Detail
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ProductDetailDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        specs={dataRow.productSpecs}
        description={dataRow.description}
      />
    </div>
  )
}
