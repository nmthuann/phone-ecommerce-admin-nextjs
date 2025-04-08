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
import { ProductColumn } from './columns'
// import { keepPreviousData, useQuery } from '@tanstack/react-query'

// import axios from 'axios'
import { DataTableToolbar } from './data-table-toolbar'
import { useState } from 'react'
import { DataTablePagination } from './data-table-pagination'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { convertJsonToAttributes } from '@/utils/convert'
import { ProductWithBrand } from '@/app/api/products/route'
import { Page } from '@/types/page.type'

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

  const fetchProducts = async ({ pageIndex, pageSize }: PaginationState): Promise<Page<ProductWithBrand>> => {
    const res = await axios.get('/api/products', {
      params: {
        page: pageIndex + 1,
        size: pageSize
      }
    })
    return res.data
  }

  const dataQuery = useQuery({
    queryKey: ['data', pagination],
    queryFn: () => fetchProducts(pagination),
    placeholderData: keepPreviousData
  })

  const formattedData: ProductColumn[] | undefined = dataQuery.data?.data.map(item => ({
    id: String(item.id),
    productName: item.productName,
    productLine: item.productLine,
    status: item.status,
    slug: item.slug,
    description: item.description,
    productSpecs: convertJsonToAttributes(item.productSpecs as Record<string, string>),
    brandName: item.brand.brandName,
    brandUrl: item.brand.brandUrl
  }))

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
    autoResetPageIndex: false,
    manualPagination: true, // Server-side pagination
    debugTable: true,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination, // Update pagination state
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
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
