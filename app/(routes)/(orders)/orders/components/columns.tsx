'use client'

import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export type OrderColumn = {
  id: string
  employeeId: string
  fullName: string
  status: string
  orderType: boolean
  shippingAddress: string
  shippingMethod: string
  paymentMethod: string
  createdAt: string
  total: string
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader column={column} title='ID' />
  },
  {
    accessorKey: 'employeeId',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Employee' />
  },
  {
    accessorKey: 'fullName',
    header: ({ column }) => <DataTableColumnHeader column={column} title='fullName' />
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Status' />
  },
  {
    accessorKey: 'orderType',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Type' />
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Payment'
  },
  {
    accessorKey: 'shippingMethod',
    header: 'Shipping'
  },
  {
    accessorKey: 'total',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Total' />
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Created' />
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions dataRow={row.original} />
  }
]
