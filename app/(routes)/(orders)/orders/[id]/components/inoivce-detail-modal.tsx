'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Invoice } from './order-detail'

interface InvoiceDetailModalProps {
  isOpen: boolean
  onClose: () => void
  invoice: Invoice
}

const InvoiceDetailModal: FC<InvoiceDetailModalProps> = ({ isOpen, onClose, invoice }) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>View Invoice Detail</DialogTitle>
            <DialogDescription>
              Manage the details of your purchase order, including item quantity, pricing, and supplier information.
            </DialogDescription>
          </DialogHeader>

          <Card>
            <CardHeader>
              <CardTitle>Invoice Details - #{invoice.invoiceCode}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='grid grid-cols-2 gap-4'>
                <p>
                  <strong>Invoice Code:</strong> {invoice.invoiceCode}
                </p>
                <p>
                  <strong>Created At:</strong> {invoice.createdAt}
                </p>
                <p>
                  <strong>Tax Code:</strong> {invoice.taxCode}
                </p>
                <p>
                  <strong>Subtotal:</strong> {invoice.subtotal}
                </p>
                <p>
                  <strong>Tax Amount:</strong> {invoice.taxAmount}
                </p>
                <p>
                  <strong>Total Amount:</strong> {invoice.totalAmount}
                </p>
                <p>
                  <strong>Notes:</strong> {invoice.notes || 'No additional notes'}
                </p>
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default InvoiceDetailModal
