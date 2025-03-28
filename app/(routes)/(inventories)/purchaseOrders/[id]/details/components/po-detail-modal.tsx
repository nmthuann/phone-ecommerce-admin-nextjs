'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FC } from 'react'
import { PurchaseOrderDetailForm } from './po-detail-form'
import { PurchaseOrderDetailColumn } from './columns'

interface PurchaseOrderDetailModalProps {
  isOpen: boolean
  onClose: () => void
  poDetailColsData: PurchaseOrderDetailColumn | null
}

const PurchaseOrderDetailModal: FC<PurchaseOrderDetailModalProps> = ({ isOpen, onClose, poDetailColsData }) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Set up Purchase Order Detail</DialogTitle>
            <DialogDescription>
              Manage the details of your purchase order, including item quantity, pricing, and supplier information.
            </DialogDescription>
          </DialogHeader>

          <PurchaseOrderDetailForm poDetailColsData={poDetailColsData} onClose={onClose} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PurchaseOrderDetailModal
