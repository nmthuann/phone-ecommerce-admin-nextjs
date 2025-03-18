'use client'

import { Input } from '@/components/ui/input'
import { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'

import { DataTableViewOptions } from './data-table-view-options'
import { CheckCircleIcon, HandCoins, PackageCheck, RocketIcon, WalletCardsIcon, X } from 'lucide-react'
import { DataTableFacetedFilter } from './data-table-faceted-filter'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export const paymentMethods = [
  {
    label: 'COD',
    value: 'COD',
    icon: HandCoins
  },
  {
    label: 'BANK',
    value: 'BANK',
    icon: WalletCardsIcon
  }
]

export const statusList = [
  {
    value: 'CONFIRMED',
    label: 'CONFIRMED',
    icon: PackageCheck
  },
  {
    value: 'SHIPPING',
    label: 'SHIPPING',
    icon: RocketIcon
  },
  {
    value: 'COMPLETED',
    label: 'COMPLETED',
    icon: CheckCircleIcon
  }
]

export function DataTableToolbar<TData>({ table }: Readonly<DataTableToolbarProps<TData>>) {
  const isFiltered = table.getState().columnFilters.length > 0
  // console.log(table.getColumn('category'))
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Filter Order Id...'
          value={(table.getColumn('id')?.getFilterValue() as string) ?? ''}
          onChange={event => table.getColumn('id')?.setFilterValue(event.target.value)}
          className='h-8 w-[150px] lg:w-[250px]'
        />
        {table.getColumn('status') && (
          <DataTableFacetedFilter column={table.getColumn('status')} title='Status' options={statusList} />
        )}
        {table.getColumn('paymentMethod') && (
          <DataTableFacetedFilter
            column={table.getColumn('paymentMethod')}
            title='Payment Method'
            options={paymentMethods}
          />
        )}
        {/* Filter */}
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
