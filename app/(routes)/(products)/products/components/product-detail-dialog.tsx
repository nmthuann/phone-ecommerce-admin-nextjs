'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
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

interface ProductDetailDialogProps {
  isOpen: boolean
  onClose: () => void
  productName: string
  specs: Attribute[]
  description: string
}

export default function ProductDetailDialog({
  isOpen,
  onClose,
  productName,
  specs,
  description
}: Readonly<ProductDetailDialogProps>) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`Product Specs (${productName})`}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
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
            {specs.map(spec => (
              <TableRow key={spec.key}>
                <TableCell className='font-medium'>{String(spec.key)}</TableCell>
                <TableCell>{String(spec.value)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>{`Total`}</TableCell>
              <TableCell className='text-right'>{specs.length} Attributes of product</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </DialogContent>
    </Dialog>
  )
}
