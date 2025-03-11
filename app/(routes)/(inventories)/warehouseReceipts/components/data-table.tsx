'use client'

import { useState } from 'react'
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable
} from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { DataTablePagination } from './data-table-pagination'
import axios from 'axios'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { Page } from '@/types/responses/page.type'
import { WarehouseReceiptResponse } from '@/types/inventories.type'
import { WarehouseReceiptColumn } from './columns'

interface DataTableProps<TValue> {
  columns: ColumnDef<WarehouseReceiptColumn, TValue>[] // Cố định kiểu dữ liệu của bảng
  defaultData: WarehouseReceiptColumn[]
  searchKey: string
}

export function DataTable<TValue>({ columns, defaultData, searchKey }: Readonly<DataTableProps<TValue>>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  })

  async function getAllData(pagination: PaginationState): Promise<Page<WarehouseReceiptResponse>> {
    const res = await axios.get(`/api/warehouseReceipts?page=${pagination.pageIndex + 1}&take=${pagination.pageSize}`)
    return res.data
  }

  const dataQuery = useQuery({
    queryKey: ['get-warehouse-receipts', pagination],
    queryFn: () => getAllData(pagination),
    placeholderData: keepPreviousData
  })

  const formattedData: WarehouseReceiptColumn[] | undefined =
    dataQuery.data?.data.map((item: WarehouseReceiptResponse) => ({
      id: String(item.id),
      receiptNumber: item.receiptNumber,
      orderNumber: item.purchaseOrder.orderNumber,
      employeeId: String(item.employeeId),
      receiptDate: String(item.receiptDate),
      createdAt: String(item.createdAt)
    })) ?? []

  const table = useReactTable({
    data: formattedData ?? defaultData,
    columns: columns,
    rowCount: dataQuery.data?.meta.itemCount ?? 0,
    state: {
      pagination,
      columnFilters
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    manualPagination: true // Server-side pagination
  })

  return (
    <div>
      <div className='flex items-center py-4'>
        <Input
          placeholder='Search'
          value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ''}
          onChange={event => table.getColumn(searchKey)?.setFilterValue(event.target.value)}
          className='max-w-sm'
        />
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePagination table={table} />
    </div>
  )
}
