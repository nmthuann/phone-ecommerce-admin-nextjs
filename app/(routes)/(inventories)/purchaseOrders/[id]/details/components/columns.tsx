'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'
import { Attribute } from '@/types/products.type'
import Currency from '@/components/utilities/currency'

//TODO: Duplicate Type (path: warehouse/client)
export type PurchaseOrderDetailColumn = {
  id: string
  orderNumber: string
  quantity: string
  unitPrice: string
  skuId: string
  barcode: string
  skuNo: string
  skuName: string
  image: string
  status: boolean
  skuAttributes: Attribute[]
  slug: string
}

export type SkuRow = {
  id: string
  skuNo: string
  barcode: string
  skuName: string
  image: string
  status: boolean
  skuAttributes: Attribute[]
  slug: string
}

export const pODetailColumns: ColumnDef<PurchaseOrderDetailColumn>[] = [
  {
    id: 'expander',
    cell: ({ row }) =>
      row.getCanExpand() ? (
        <button {...{ onClick: row.getToggleExpandedHandler(), className: 'cursor-pointer' }}>
          {row.getIsExpanded() ? '👇' : '👉'}
        </button>
      ) : (
        '🔵'
      )
  },

  {
    accessorKey: 'orderNumber',
    header: 'Order Number'
  },
  {
    accessorKey: 'skuNo',
    header: 'sku No'
  },
  {
    accessorKey: 'quantity',
    header: 'quantity'
  },
  {
    accessorKey: 'unitPrice',
    header: 'Unit Price',
    cell: ({ row }) => <Currency className='text-base' value={row.original.unitPrice} isShorten={false} />
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
