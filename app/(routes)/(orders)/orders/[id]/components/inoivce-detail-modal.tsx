'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Invoice } from './order-detail'
import Currency from '@/components/utilities/currency'

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
              <CardTitle>#{invoice.invoiceCode}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='space-y-2'>
                <div>
                  <strong>Invoice Code:</strong> {invoice.invoiceCode}
                </div>
                <div>
                  <strong>Created At:</strong> {invoice.createdAt}
                </div>
                <div>
                  <strong>Tax Code:</strong> {invoice.taxCode}
                </div>
                <div className='flex flex-row space-x-2 '>
                  <strong>Subtotal:</strong>{' '}
                  <Currency className='text-base justify-center text-blue-800' value={invoice.subtotal} />
                </div>
                <div>
                  <strong>Tax Amount:</strong> {invoice.taxAmount}
                </div>
                <div className='flex flex-row space-x-2 '>
                  <strong>Total Amount:</strong>
                  <Currency className='text-base justify-center text-blue-800' value={invoice.totalAmount} />
                </div>
                <div>
                  <strong>Notes:</strong> {invoice.notes || 'No additional notes'}
                </div>
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default InvoiceDetailModal
