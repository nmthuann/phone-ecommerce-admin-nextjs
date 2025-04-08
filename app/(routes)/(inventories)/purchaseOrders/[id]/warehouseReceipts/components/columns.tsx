'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Attribute } from '@/types/products.type'
import { CellAction } from './cell-action'
import { Badge } from '@/components/ui/badge'

export type ProductSerialColumn = {
  id: string
  serialNumber: string
  dateManufactured: string
  serialStatus: boolean
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
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue<boolean>('status')
      return (
        <Badge
          // variant={status ? 'success' : 'destructive'} // hoặc tuỳ variant bạn có
          className={status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
        >
          {status ? 'Available' : 'Unavailable'}
        </Badge>
      )
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
