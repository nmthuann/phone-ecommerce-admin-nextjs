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
  PaginationState,
  Row,
  useReactTable
} from '@tanstack/react-table'
import Image from 'next/image'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Attribute } from '@/types/products.type'
import { ProductSerialColumn, SkuRow } from './columns'
import { DataTablePagination } from './data-table-pagination'
import axios from 'axios'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { Page } from '@/types/responses/page.type'
import { ProductSerialResponse } from '@/types/inventories.type'

interface DataTableProps<TValue> {
  columns: ColumnDef<ProductSerialColumn, TValue>[]
  defaultData: ProductSerialColumn[]
  searchKey: string
  currentParam: string
}

export function DataTable<TValue>({ columns, defaultData, searchKey, currentParam }: Readonly<DataTableProps<TValue>>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  })

  async function getAllData(pagination: PaginationState): Promise<Page<ProductSerialResponse>> {
    const res = await axios.get(
      `/api/productSerials?warehouseReceiptId=${currentParam}&page=${pagination.pageIndex + 1}&take=${
        pagination.pageSize
      }`
    )
    return res.data
  }

  const dataQuery = useQuery({
    queryKey: ['get-product-serials', pagination],
    queryFn: () => getAllData(pagination),
    placeholderData: keepPreviousData
  })

  const formattedData: ProductSerialColumn[] | undefined =
    dataQuery.data?.data.map((item: ProductSerialResponse) => ({
      id: item.id,
      serialNumber: item.serialNumber,
      dateManufactured: String(item.dateManufactured),
      productSkuId: String(item.sku.id),
      barcode: item.sku.barcode,
      skuNo: item.sku.skuNo,
      skuName: item.sku.skuName,
      image: item.sku.image,
      status: item.sku.status,
      skuAttributes: item.sku.skuAttributes,
      slug: item.sku.slug
    })) ?? []

  const table = useReactTable({
    data: formattedData ?? defaultData,
    columns,
    rowCount: dataQuery.data?.meta.itemCount ?? 0,
    state: {
      pagination,
      columnFilters
    },
    onPaginationChange: setPagination, // Update pagination state
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getRowCanExpand: () => true, // Cho phép tất cả hàng có thể mở rộng
    manualPagination: true, // Server-side pagination
    debugTable: true
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
      <DataTablePagination table={table} />
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
