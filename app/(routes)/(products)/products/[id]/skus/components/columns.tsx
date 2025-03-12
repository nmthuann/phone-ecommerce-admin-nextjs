'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CellAction } from './cell-action'
import { Attribute } from '@/types/products.type'
import { Switch } from '@/components/ui/switch'

export type ProductSkuColumn = {
  id: string
  skuNo: string
  barcode: string
  skuName: string
  image: string
  status: boolean
  slug: string
  skuAttributes: Attribute[]
  stock: number
}

export const columns: ColumnDef<ProductSkuColumn>[] = [
  {
    accessorKey: 'id',
    header: 'Id'
  },
  {
    accessorKey: 'skuNo',
    header: 'skuNo'
  },
  {
    accessorKey: 'barcode',
    header: 'Barcode'
  },
  {
    accessorKey: 'skuName',
    header: 'Sku Name'
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      if (row.original.status) {
        return <Switch aria-label='Product Status ON' color='success' disabled />
      }
      return <Switch aria-label='Product Status OFF' color='success' disabled />
    }
  },
  {
    accessorKey: 'image',
    header: 'Image'
  },
  {
    accessorKey: 'stock',
    header: 'Stock'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
