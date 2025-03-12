'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Attribute } from '@/types/products.type'

interface ProductDetailDialogProps {
  isOpen: boolean
  onClose: () => void
  specs: Attribute[]
  description: string
}

export default function ProductDetailDialog({
  isOpen,
  onClose,
  specs,
  description
}: Readonly<ProductDetailDialogProps>) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{specs[0].key}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
