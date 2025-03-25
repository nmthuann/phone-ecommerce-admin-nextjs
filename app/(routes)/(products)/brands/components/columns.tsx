'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

export type BrandColumn = {
  id: string
  brandName: string
  brandUrl: string
  description: string
  brandAbbreviation: string
}

export const columns: ColumnDef<BrandColumn>[] = [
  {
    accessorKey: 'id',
    header: 'Id'
  },
  {
    accessorKey: 'brandName',
    header: 'Name'
  },
  {
    accessorKey: 'description',
    header: 'Description'
  },
  {
    accessorKey: 'brandAbbreviation',
    header: 'Abbreviation'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
