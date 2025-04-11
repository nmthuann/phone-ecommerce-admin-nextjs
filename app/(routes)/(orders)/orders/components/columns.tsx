'use client'

import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import Currency from '@/components/utilities/currency'

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
  hasInvoice: boolean
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
    header: ({ column }) => <DataTableColumnHeader column={column} title='Type' />,
    cell: ({ row }) => {
      const value = row.getValue<boolean>('orderType')
      return (
        <span className={value ? 'text-green-600 font-medium' : 'text-red-800 font-medium'}>
          {value ? 'ONLINE' : 'OFFLINE'}
        </span>
      )
    }
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
    header: ({ column }) => <DataTableColumnHeader column={column} title='Total' />,
    cell: ({ row }) => {
      return <Currency className='text-sm' value={row.getValue<string>('total')} />
    }
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
