import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FC } from 'react'
import { PriceForm } from './price-form'

interface PriceModalProps {
  isOpen: boolean
  onClose: () => void
  data: {
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
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </DialogDescription>
          </DialogHeader>

          {/* Hiển thị thông tin sản phẩm */}
          <div className='space-y-3 p-4 bg-gray-100 rounded-md'>
            <p>
              <b>Số lượng:</b> {String(data.quantity)}
            </p>
            <p>
              <b>Giá nhập:</b> {String(data.unitPrice)} VND
            </p>
          </div>

          <PriceForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default PriceModal
