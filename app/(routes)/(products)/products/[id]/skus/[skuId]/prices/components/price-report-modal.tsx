'use client'
import { PriceResponse } from '@/types/products.type'
import { PriceReport } from './price-report'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface PriceReportDialogProps {
  isOpen: boolean
  onClose: () => void
  data: PriceResponse[]
}

export default function PriceReportDialog({ isOpen, onClose, data }: Readonly<PriceReportDialogProps>) {
  const title = data ? 'Report Price' : 'No Data'

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <PriceReport />
      </DialogContent>
    </Dialog>
  )
}
