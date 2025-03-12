'use client'

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
import { ProductResponse } from '@/types/products.type'
import { ProductColumn } from './columns'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

import axios from 'axios'
import { DataTableToolbar } from './data-table-toolbar'
import { useState } from 'react'
import { Page } from '@/types/responses/page.type'
import { DataTablePagination } from './data-table-pagination'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  defaultData: TData[]
}
export function DataTable<TValue>({ columns, defaultData }: Readonly<DataTableProps<ProductColumn, TValue>>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  })

  async function getAllData(pagination: PaginationState): Promise<Page<ProductResponse>> {
    const res = await axios.get(`/api/products?page=${pagination.pageIndex}&size=${pagination.pageSize}`)

    return res.data
  }

  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => getAllData(pagination),
    placeholderData: keepPreviousData
  })

  const formattedData: ProductColumn[] | undefined = dataQuery.data?.data.map((item: ProductResponse) => ({
    id: String(item.id),
    productName: item.productName,
    productLine: item.productLine,
    status: item.status,
    slug: item.slug,
    description: item.description,
    productSpecs: item.productSpecs,
    categoryName: item.categoryName,
    categoryUrl: item.categoryUrl,
    brandName: item.brandName,
    brandUrl: item.brandUrl
    // skus: item.skus
  }))

  const table = useReactTable({
    data: formattedData ?? defaultData, // Use formatted data or default
    columns,
    rowCount: dataQuery.data?.meta.itemCount ?? 0, // Total number of rows
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
    <div className='space-y-4 mt-2'>
      <DataTableToolbar table={table} />
      <div className='rounded-lg border bg-white text-black dark:bg-slate-950 dark:text-white'>
        <Table className=''>
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
