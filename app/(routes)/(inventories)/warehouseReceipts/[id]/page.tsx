// import ErrorComponent from '@/components/errors/error-component'
// import { Metadata } from 'next'
// import { Supplier } from '@/types/inventories.type'
// import prisma from '@/lib/prisma'
// import WarehouseReceiptForm from './components/warehouse-receipt-form'

// export const metadata: Metadata = {
//   title: 'Warehouse Receipt',
//   description: 'Warehouse Receipt Management.'
// }

// const WarehouseReceiptPage = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id } = await params

//   let warehouseReceipt = null
//   let suppliers: Supplier[] = []

//   try {
//     if (id !== 'new') {
//       warehouseReceipt = await prisma.warehouseReceipt.findUnique({
//         where: {
//           id: parseInt(id)
//         }
//       })
//     }
//     suppliers = await prisma.supplier.findMany()
//   } catch (error) {
//     console.error('Error:::', error)
//     return (
//       <ErrorComponent
//         page='Warehouse Receipt Page'
//         message='Failed to load Warehouse Receipt. Please try again later.'
//       />
//     )
//   }

//   return (
//     <div className='flex-col'>
//       <div className='flex-1 space-y-4 p-8 pt-6'>
//         <WarehouseReceiptForm initialData={warehouseReceipt} suppliers={suppliers} />
//       </div>
//     </div>
//   )
// }

// export default WarehouseReceiptPage
