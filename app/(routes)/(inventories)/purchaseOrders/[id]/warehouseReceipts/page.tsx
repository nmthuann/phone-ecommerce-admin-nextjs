import ErrorComponent from '@/components/errors/error-component'
import prisma from '@/lib/prisma'
import { ProductSerialClient } from './components/client'
import { ProductSerialColumn } from './components/columns'
import { convertJsonToAttributes } from '@/utils/convert'
import { PurchaseOrder, PurchaseOrderDetail, Supplier, WarehouseReceipt } from '@prisma/client'

export type PurchaseOrderWithDetails = PurchaseOrder & {
  supplier: Supplier
  warehouseReceipt: WarehouseReceipt | null
  purchaseOrderDetail: (PurchaseOrderDetail & { unitPrice: string })[] | null
}

const WarehouseReceiptPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  try {
    const result = await prisma.$transaction(async tx => {
      const purchaseOrder = await tx.purchaseOrder.findUnique({
        where: { id: parseInt(id) }
      })

      if (!purchaseOrder) {
        throw new Error('Purchase Order not found')
      }

      const purchaseOrderDetails = await tx.purchaseOrderDetail.findMany({
        where: { purchaseOrderId: purchaseOrder.id }
      })

      const supplier = await tx.supplier.findUnique({
        where: { id: purchaseOrder.supplierId }
      })

      return { purchaseOrder, purchaseOrderDetails, supplier }
    })

    const { purchaseOrder, purchaseOrderDetails, supplier } = result

    const warehouseReceipt = await prisma.warehouseReceipt.findUnique({
      where: {
        purchaseOrderId: purchaseOrder.id
      }
    })

    if (!purchaseOrder) {
      return (
        <ErrorComponent
          page='Purchase Order Details Page'
          message='Failed to load Purchase Order Details. Please try again later.'
        />
      )
    }

    if (!supplier) {
      return (
        <ErrorComponent
          page='Purchase Order Details Page'
          message='Failed to load Purchase Order Details. Please try again later.'
        />
      )
    }

    if (!warehouseReceipt) {
      return (
        <ErrorComponent
          page='Purchase Order Details Page'
          message='Failed to load Purchase Order Details. Please try again later.'
        />
      )
    }

    if (!purchaseOrderDetails) {
      return (
        <ErrorComponent
          page='Purchase Order Details Page'
          message='Failed to load Purchase Order Details. Please try again later.'
        />
      )
    }

    const serials = await prisma.productSerial.findMany({
      where: {
        warehouseReceiptId: warehouseReceipt.id
      },
      include: {
        productSku: true
      }
    })

    const formattedSerial: ProductSerialColumn[] = serials.map(item => ({
      id: item.id,
      serialNumber: item.serialNumber,
      dateManufactured: String(item.dateManufactured),
      productSkuId: String(item.productSku.id),
      barcode: item.productSku.barcode,
      skuNo: item.productSku.skuNo,
      skuName: item.productSku.skuName,
      image: item.productSku.image,
      status: item.productSku.status,
      skuAttributes: convertJsonToAttributes(item.productSku.skuAttributes as Record<string, string>),
      slug: item.productSku.slug
    }))

    const formattedDetail = purchaseOrderDetails.map(detail => ({
      purchaseOrderId: String(purchaseOrder.id),
      skuId: String(detail.skuId),
      quantity: String(detail.quantity),
      unitPrice: String(detail.unitPrice)
    }))

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <ProductSerialClient
            data={formattedSerial}
            length={serials.length}
            currentParam={id}
            purchaseOrder={purchaseOrder}
            supplier={supplier}
            pODetails={formattedDetail}
            warehouseReceipt={warehouseReceipt}
          />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return (
      <ErrorComponent
        page='Purchase Order Details Page'
        message='Failed to load Purchase Order Details. Please try again later.'
      />
    )
  }
}

export default WarehouseReceiptPage
