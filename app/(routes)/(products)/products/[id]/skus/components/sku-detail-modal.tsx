'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Attribute } from '@/types/products.type'

interface SkuAttributeDialogProps {
  isOpen: boolean
  onClose: () => void
  attrs: Attribute[]
}

export default function SkuAttributeDialog({ isOpen, onClose, attrs }: Readonly<SkuAttributeDialogProps>) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{attrs[0].key}</DialogTitle>
          <DialogDescription>bổ sung gì đó ở đây</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
