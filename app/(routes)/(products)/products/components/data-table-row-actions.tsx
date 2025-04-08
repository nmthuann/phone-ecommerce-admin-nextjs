'use client'

import { Barcode, Copy, Edit, Ellipsis, List } from 'lucide-react'

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

import { usePathname, useRouter } from 'next/navigation'
import { ProductColumn } from './columns'
import ProductDetailDialog from './product-detail-dialog'
import { useState } from 'react'
import LoadingOverlay from '@/components/loading-overlay'

interface DataTableRowActionsProps {
  dataRow: ProductColumn
}

export function DataTableRowActions({ dataRow }: Readonly<DataTableRowActionsProps>) {
  const router = useRouter()
  const pathname = usePathname()
  const [loading, setLoading] = useState<boolean>(false)
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast.success(`Products ${Messages.COPY_ID}`)
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
          <DropdownMenuLabel>Product Options </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => onCopy(dataRow.id)}>
            <Copy />
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`products/${dataRow.id}`)}>
            <Edit />
            Edit Product
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleOnClickViewDetail}>
            <List />
            View Detail
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setLoading(true)
              router.push(`${pathname}/${dataRow.id}/skus`)
            }}
          >
            <Barcode />
            View Sku List
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ProductDetailDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        productName={dataRow.productName}
        specs={dataRow.productSpecs}
        description={dataRow.description}
      />
      <LoadingOverlay loading={loading} />
    </div>
  )
}
