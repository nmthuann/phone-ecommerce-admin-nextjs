'use client'

import React, { useState } from 'react'
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  Row,
  useReactTable
} from '@tanstack/react-table'
import Image from 'next/image'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { SkuRow } from './columns'
import { Attribute } from '@/types/product.type'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchKey: string
}

export function DataTable<TData, TValue>({ columns, data, searchKey }: Readonly<DataTableProps<TData, TValue>>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(), // Thêm model mở rộng

    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters
    },
    getRowCanExpand: () => true // Cho phép tất cả hàng có thể mở rộng
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
      {/* <div className='rounded-md border'>
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
      </div> */}
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(row => (
                <React.Fragment key={row.id}>
                  {/* Hàng chính */}
                  <TableRow>
                    {row.getVisibleCells().map(cell => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>

                  {/* Hàng mở rộng */}
                  {row.getIsExpanded() && (
                    <TableRow>
                      <TableCell colSpan={columns.length + 1}>
                        <ExpandedRowComponent row={row as Row<SkuRow>} />
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
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
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button variant='outline' size='sm' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          <ChevronLeftIcon className='h-4 w-4' />
          Previous
        </Button>
        <Button variant='outline' size='sm' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
          <ChevronRightIcon className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}

const ExpandedRowComponent = <T extends SkuRow>({ row }: { row: Row<T> }) => {
  return (
    <div className='p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md'>
      <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2'>SKU Details</h3>

      <div className='grid grid-cols-2 gap-4'>
        <div>
          <p>
            <strong className='text-gray-700 dark:text-gray-300'>SKU ID:</strong> {row.original.id}
          </p>
          <p>
            <strong className='text-gray-700 dark:text-gray-300'>SKU Name:</strong> {row.original.skuName}
          </p>
          <p>
            <strong className='text-gray-700 dark:text-gray-300'>Barcode:</strong> {row.original.barcode}
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <Image
            alt={row.original.skuName}
            src={row.original.image}
            width={80}
            height={80}
            className='rounded-md object-cover border border-gray-300 dark:border-gray-700'
          />
        </div>
      </div>

      <div className='mt-3'>
        <h4 className='text-md font-medium text-gray-700 dark:text-gray-300'>Attributes:</h4>
        <ul className='list-disc list-inside text-sm text-gray-600 dark:text-gray-400'>
          {row.original.skuAttributes.map((attr: Attribute) => (
            <li key={attr.key}>
              <strong>{attr.key}:</strong> {String(attr.value)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
