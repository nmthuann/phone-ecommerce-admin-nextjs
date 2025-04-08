'use client'

import { Copy, Edit, Ellipsis, FilePlus2, List } from 'lucide-react'

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

import { PurchaseOrdersColumn } from './columns'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import WarehouseReceiptModal from './warehouse-receipt-modal'

interface DataTableRowActionsProps {
  dataRow: PurchaseOrdersColumn
}

export function DataTableRowActions({ dataRow }: Readonly<DataTableRowActionsProps>) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
          <DropdownMenuItem onClick={() => router.push(`purchaseOrders/${dataRow.id}/details`)}>
            <List />
            View PO Detail
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              if (!dataRow.hasWarehouseReceipt) {
                setIsOpen(true)
              } else {
                router.push(`/purchaseOrders/${dataRow.id}/warehouseReceipts`)
              }
            }}
            disabled={!dataRow.hasDetail}
          >
            <FilePlus2 />
            {dataRow.hasWarehouseReceipt ? ' Import Warehouse Receipt' : 'Create Warehouse Receipt'}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <WarehouseReceiptModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={{
          purchaseOrderId: parseInt(dataRow.id),
          orderNumber: dataRow.orderNumber
        }}
      />
    </div>
  )
}
