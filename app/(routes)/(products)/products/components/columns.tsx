'use client'

import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from './data-table-column-header'
import { Switch } from '@/components/ui/switch'
import { Attribute } from '@/types/products.type'
import { DataTableRowActions } from './data-table-row-actions'

export type ProductColumn = {
  id: string
  productName: string
  productLine: string
  status: boolean
  slug: string
  description: string
  productSpecs: Attribute[]
  categoryName: string
  categoryUrl: string
  brandName: string
  brandUrl: string
  //   skus: SkuResponse[]
}

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'productName',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Product Name' />
  },
  {
    accessorKey: 'productLine',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Product Line' />
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      if (row.original.status) {
        return <Switch aria-label='Product Status ON' disabled />
      }
      return <Switch aria-label='Product Status OFF' color='success' disabled />
    }
  },
  {
    accessorKey: 'categoryName',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Category' />
  },
  {
    accessorKey: 'brandName',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Brand' />
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions dataRow={row.original} />
  }
]
