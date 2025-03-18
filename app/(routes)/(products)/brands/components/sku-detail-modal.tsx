'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Attribute } from '@/types/products.type'

interface SkuAttributeDialogProps {
  isOpen: boolean
  onClose: () => void
  skuName: string
  attrs: Attribute[]
}

export default function SkuAttributeDialog({ isOpen, onClose, skuName, attrs }: Readonly<SkuAttributeDialogProps>) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`Sku Attributes (${skuName})`}</DialogTitle>
        </DialogHeader>
        <Table>
          <TableCaption>A list of Product Specs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Attribute</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attrs.map(attr => (
              <TableRow key={attr.key}>
                <TableCell className='font-medium'>{String(attr.key)}</TableCell>
                <TableCell>{String(attr.value)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>{`Total`}</TableCell>
              <TableCell className='text-right'>{attrs.length} Attributes of SKU</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </DialogContent>
    </Dialog>
  )
}
