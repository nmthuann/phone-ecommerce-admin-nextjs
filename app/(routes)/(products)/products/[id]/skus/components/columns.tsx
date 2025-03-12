'use client'

import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'
import { CellAction } from './cell-action'
import { Attribute } from '@/types/products.type'
import { Switch } from '@/components/ui/switch'
import Link from 'next/link'

export type ProductSkuColumn = {
  id: string
  skuNo: string
  barcode: string
  skuName: string
  image: string
  status: boolean
  slug: string
  skuAttributes: Attribute[]
  stock: number
}

export const columns: ColumnDef<ProductSkuColumn>[] = [
  {
    accessorKey: 'id',
    header: 'Id'
  },
  {
    accessorKey: 'image',
    header: 'Image',
    cell: ({ row }) => (
      <Image
        alt={row.original.skuName}
        src={row.original.image}
        width={80}
        height={80}
        className='rounded-md object-cover border border-gray-300 dark:border-gray-700'
      />
    )
  },
  {
    accessorKey: 'skuNo',
    header: 'skuNo'
  },
  {
    accessorKey: 'barcode',
    header: 'Barcode'
  },
  {
    accessorKey: 'skuName',
    header: 'Sku Name'
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const isActive = row.original.status
      return <Switch checked={isActive} aria-label={`Sku Status ${isActive ? 'ON' : 'OFF'}`} disabled />
    }
  },

  {
    accessorKey: 'stock',
    header: 'Stock'
  },
  {
    accessorKey: 'slug',
    header: 'Slug',
    cell: ({ row }) => (
      <Link
        href={`/products/${row.original.slug}`}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-600 underline'
      >
        view
      </Link>
    )
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
