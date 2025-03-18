'use client'

import * as React from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  PaginationState,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  getFilteredRowModel,
  getSortedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues
} from '@tanstack/react-table'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { DataTablePagination } from './data-table-pagination'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { DataTableToolbar } from './data-table-toolbar'
import { Page } from '@/types/responses/page.type'
import { OrderColumn } from './columns'
import { OrderResponse } from '@/types/orders.type'
import { format, parseISO } from 'date-fns'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  defaultData: TData[]
}
export function DataTable<TValue>({ columns, defaultData }: Readonly<DataTableProps<OrderColumn, TValue>>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  })

  async function getAllData(pagination: PaginationState): Promise<Page<OrderResponse>> {
    const res = await axios.get(`/api/orders?page=${pagination.pageIndex + 1}&take=${pagination.pageSize}`)
    return res.data
  }

  const dataQuery = useQuery({
    queryKey: ['get-orders', pagination],
    queryFn: () => getAllData(pagination),
    placeholderData: keepPreviousData
  })

  const formattedData: OrderColumn[] | undefined = dataQuery.data?.data
    ? dataQuery.data.data.map((item: OrderResponse) => ({
        id: String(item.id),
        userId: item.userId,
        employeeId: String(item.employeeId),
        status: item.status,
        orderType: item.orderType,
        note: item.note,
        shippingAddress: item.shippingAddress,
        contactPhone: item.contactPhone,
        shippingMethod: item.shippingMethod,
        paymentMethod: item.paymentMethod,
        shippingFee: String(item.shippingFee),
        discount: String(item.discount),
        postcode: item.postcode,
        createdAt: format(parseISO(String(item.createdAt)), 'yyyy-MM-dd HH:mm:ss'),
        updatedAt: format(parseISO(String(item.updatedAt)), 'yyyy-MM-dd HH:mm:ss')
      }))
    : []

  const table = useReactTable({
    data: formattedData ?? defaultData,
    columns,
    rowCount: dataQuery.data?.meta.itemCount ?? 0,
    state: {
      pagination,
      columnFilters,
      sorting,
      columnVisibility
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination, // Update pagination state
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: true, // Server-side pagination
    debugTable: true
  })

  return (
    <div className='space-y-4 mt-2 p-2'>
      <DataTableToolbar table={table} />
      <div className='overflow-y-auto max-h-[calc(100vh-312px)] max-w-[78vw] rounded-lg border bg-white text-black dark:bg-slate-950 dark:text-white'>
        <Table className='table-auto'>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
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
