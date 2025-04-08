'use client'

import { useState } from 'react'
import { Copy, Edit, HandCoins, ListCollapseIcon, MoreHorizontal } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { ProductSkuColumn } from './columns'
import SkuAttributeDialog from './sku-detail-modal'

import LoadingOverlay from '@/components/loading-overlay'

interface CellActionProps {
  data: ProductSkuColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast.success('SKU ID copied to clipboard.')
  }
  const handleClickViewSkuDetail = () => {
    setIsOpen(true)
  }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className='mr-2 h-4 w-4' /> Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(`${pathname}/${data.id}`)}>
            <Edit className='mr-2 h-4 w-4' /> Update Sku
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setLoading(true)
              router.push(`${pathname}/${data.id}/prices`)
            }}
          >
            <HandCoins className='mr-2 h-4 w-4' /> Set up Prices
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleClickViewSkuDetail()}>
            <ListCollapseIcon className='mr-2 h-4 w-4' /> View SKU Detail
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <SkuAttributeDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        skuName={data.skuName}
        attrs={data.skuAttributes}
      />
      <LoadingOverlay loading={loading} />
    </div>
  )
}
