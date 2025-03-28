'use client'

import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'
import { CheckCircleIcon, XCircleIcon } from 'lucide-react'

export type PurchaseOrdersColumn = {
  id: string
  orderNumber: string
  supplierId: string
  employeeId: string
  orderDate: string
  createdAt: string
  hasDetail: boolean
  hasWarehouseReceipt: boolean
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
    accessorKey: 'hasDetail',
    header: 'Has Detail',
    cell: ({ row }) => {
      const hasDetail = row.original.hasDetail
      return (
        <div className='flex justify-center'>
          {hasDetail ? (
            <CheckCircleIcon className='text-green-500 w-6 h-6' />
          ) : (
            <XCircleIcon className='text-gray-400 w-6 h-6' />
          )}
        </div>
      )
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions dataRow={row.original} />
  }
]
