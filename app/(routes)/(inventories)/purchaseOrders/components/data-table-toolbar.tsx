'use client'

import { Input } from '@/components/ui/input'
import { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'

import { DataTableViewOptions } from './data-table-view-options'
import { X } from 'lucide-react'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({ table }: Readonly<DataTableToolbarProps<TData>>) {
  const isFiltered = table.getState().columnFilters.length > 0
  // console.log(table.getColumn('category'))
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Filter Order Number...'
          value={(table.getColumn('orderNumber')?.getFilterValue() as string) ?? ''}
          onChange={event => table.getColumn('orderNumber')?.setFilterValue(event.target.value)}
          className='max-w-sm'
        />
        {/* Filter By Category */}
        {isFiltered && (
          <Button variant='ghost' onClick={() => table.resetColumnFilters()} className='h-8 px-2 lg:px-3'>
            Reset
            <X className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
