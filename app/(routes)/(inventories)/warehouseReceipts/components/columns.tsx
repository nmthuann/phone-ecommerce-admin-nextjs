'use client'

import { ColumnDef } from '@tanstack/react-table'
import { CellAction } from './cell-action'

export type WarehouseReceiptColumn = {
  id: string
  orderNumber: string
  employeeId: string
  receiptNumber: string
  createdAt: string
  receiptDate: string
}

export const columns: ColumnDef<WarehouseReceiptColumn>[] = [
  {
    accessorKey: 'id',
    header: 'Id'
  },
  {
    accessorKey: 'orderNumber',
    header: 'Order Number'
  },
  {
    accessorKey: 'receiptNumber',
    header: 'Receipt Number'
  },
  {
    accessorKey: 'employeeId',
    header: 'Employee Id'
  },
  {
    accessorKey: 'receiptDate',
    header: 'Receipt Date'
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
