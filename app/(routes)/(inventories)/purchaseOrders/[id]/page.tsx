import ErrorComponent from '@/components/errors/error-component'
import { Metadata } from 'next'
import PurchaseOrderForm from './components/purchase-order-form'
import { Supplier } from '@/types/inventories.type'
import prisma from '@/lib/prisma'
export const metadata: Metadata = {
  title: 'Purchase Order',
  description: 'Purchase Order Management.'
}

const PurchaseOrderPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  let purchaseOrder = null
  let suppliers: Supplier[] = []

  try {
    if (id !== 'new') {
      purchaseOrder = await prisma.purchaseOrder.findUnique({
        where: {
          id: parseInt(id)
        }
      })
    }
    suppliers = await prisma.supplier.findMany()
  } catch (error) {
    console.error('Error:::', error)
    return (
      <ErrorComponent page='Purchase Order Page' message='Failed to load Purchase Order. Please try again later.' />
    )
  }

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <PurchaseOrderForm initialData={purchaseOrder} suppliers={suppliers} />
      </div>
    </div>
  )
}

export default PurchaseOrderPage
