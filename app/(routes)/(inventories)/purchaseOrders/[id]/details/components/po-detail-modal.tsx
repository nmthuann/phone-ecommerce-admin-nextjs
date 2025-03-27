'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FC } from 'react'
import { PurchaseOrderDetailForm } from './po-detail-form'

interface PurchaseOrderDetailModalProps {
  isOpen: boolean
  onClose: () => void
}

const PurchaseOrderDetailModal: FC<PurchaseOrderDetailModalProps> = ({ isOpen, onClose }) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </DialogDescription>
          </DialogHeader>

          <PurchaseOrderDetailForm onClose={onClose} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PurchaseOrderDetailModal
