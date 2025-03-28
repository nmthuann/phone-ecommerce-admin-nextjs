'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Attribute } from '@/types/products.type'
import { CellAction } from './cell-action'

export type ProductSerialColumn = {
  id: string
  serialNumber: string
  dateManufactured: string
  productSkuId: string
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

export const columns: ColumnDef<ProductSerialColumn>[] = [
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
    accessorKey: 'id',
    header: 'Id'
  },
  {
    accessorKey: 'skuNo',
    header: 'Sku No'
  },
  {
    accessorKey: 'serialNumber',
    header: 'serialNumber'
  },
  {
    accessorKey: 'dateManufactured',
    header: 'dateManufactured'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
