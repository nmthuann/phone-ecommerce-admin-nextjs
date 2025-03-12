'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CellAction } from './cell-action'
import Currency from '@/components/utilities/currency'

export type PriceColumn = {
  productSkuId: string
  beginAt: string
  sellingPrice: string
  displayPrice: string
  createdAt: string
}

export const columns: ColumnDef<PriceColumn>[] = [
  {
    accessorKey: 'productSkuId',
    header: 'SKU Id'
  },
  {
    accessorKey: 'beginAt',
    header: 'Begin At'
  },
  {
    accessorKey: 'displayPrice',
    header: 'Display Price',
    cell: ({ row }) => (
      <Currency className='!text-sm line-through !font-normal' value={row.original.displayPrice} isShorten={false} />
    )
  },
  {
    accessorKey: 'sellingPrice',
    header: 'Selling Price',
    cell: ({ row }) => <Currency className='text-base' value={row.original.sellingPrice} isShorten={false} />
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
