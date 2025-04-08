import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FC } from 'react'
import { PriceForm } from './price-form'

interface PriceModalProps {
  isOpen: boolean
  onClose: () => void
  data: {
    productSkuId: string
    quantity: string
    unitPrice: string
  }
}

const PriceModal: FC<PriceModalProps> = ({ isOpen, onClose, data }) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Product Pricing Details</DialogTitle>
            <DialogDescription>
              Please review the current quantity and unit price. You can update the information below if needed.
            </DialogDescription>
          </DialogHeader>

          {/* Hiển thị thông tin sản phẩm */}
          <div className='space-y-3 p-4 bg-gray-100 rounded-md'>
            <p>
              <b>Quantity:</b> {String(data.quantity)}
            </p>
            <p>
              <b>Unit Price (Purchase Order):</b> {String(data.unitPrice)} VND
            </p>
          </div>

          <PriceForm onClose={onClose} productSkuId={data.productSkuId} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PriceModal
