'use client'

import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export type OrderColumn = {
  id: string
  userId: string
  employeeId: string
  status: string
  orderType: boolean
  contactPhone: string
  shippingMethod: string
  paymentMethod: string
  shippingFee: string
  discount: string
  createdAt: string
  updatedAt: string
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader column={column} title='ID' />
  },

  {
    accessorKey: 'employeeId',
    header: ({ column }) => <DataTableColumnHeader column={column} title='EmpId' />
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
    accessorKey: 'contactPhone',
    header: 'Contact'
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
    accessorKey: 'shippingFee',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Fee' />
  },

  {
    accessorKey: 'discount',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Discount' />
  },

  {
    accessorKey: 'createdAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Created' />
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title='Updated' />
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions dataRow={row.original} />
  }
]
