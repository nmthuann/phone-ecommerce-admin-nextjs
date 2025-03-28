'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FC } from 'react'
import { WarehouseReceiptForm } from './warehouse-receipt-form'

interface WarehouseReceiptModalProps {
  isOpen: boolean
  onClose: () => void
  data: {
    purchaseOrderId: number
    orderNumber: string
  }
}

const WarehouseReceiptModal: FC<WarehouseReceiptModalProps> = ({ isOpen, onClose, data }) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Import Warehouse Receipt</DialogTitle>
            <DialogDescription>
              You are currently processing <strong>Purchase Order #{data.orderNumber}</strong>. Please verify the
              details before proceeding.
            </DialogDescription>
          </DialogHeader>

          <WarehouseReceiptForm onClose={onClose} purchaseOrderId={data.purchaseOrderId} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default WarehouseReceiptModal
