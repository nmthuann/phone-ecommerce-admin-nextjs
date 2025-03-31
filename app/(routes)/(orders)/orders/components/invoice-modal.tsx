'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FC } from 'react'
import { InvoiceForm } from './invoice-form'

interface InvoiceModalProps {
  isOpen: boolean
  onClose: () => void
  orderId: string
}

const InvoiceModal: FC<InvoiceModalProps> = ({ isOpen, onClose, orderId }) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export Invoice</DialogTitle>
            <DialogDescription>
              Manage the details of your purchase order, including item quantity, pricing, and supplier information.
            </DialogDescription>
          </DialogHeader>

          <InvoiceForm orderId={orderId} onClose={onClose} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default InvoiceModal
