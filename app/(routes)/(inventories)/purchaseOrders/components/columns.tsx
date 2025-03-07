'use client'

import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export type PurchaseOrdersColumn = {
  id: string
  orderNumber: string
  supplierId: string
  employeeId: string
  orderDate: string
  createdAt: string
}

export const columns: ColumnDef<PurchaseOrdersColumn>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader column={column} title='ID' />
  },
  {
    accessorKey: 'orderNumber',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Order Number' />
  },
  {
    accessorKey: 'supplierId',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Supplier Id' />
  },
  {
    accessorKey: 'employeeId',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Employee Id' />
  },
  {
    accessorKey: 'orderDate',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Order Date' />
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title='created At' />
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions dataRow={row.original} />
  }
]
