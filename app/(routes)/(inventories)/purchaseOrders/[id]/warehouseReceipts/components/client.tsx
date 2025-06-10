'use client'

import { DownloadCloudIcon, PlusCircle } from 'lucide-react'
import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { columns, ProductSerialColumn } from './columns'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Currency from '@/components/utilities/currency'
import { ProductSku, PurchaseOrder, Supplier, WarehouseReceipt } from '@prisma/client'
import SerialModal from './serial-modal'
import { useState } from 'react'
import { DataTable } from './data-table'

// TODO: Duplicate Type (path: purchaseOrders/columns)
export type PurchaseOrderDetailColumn = {
  purchaseOrderId: string
  skuId: string
  quantity: string
  unitPrice: string
  sku: ProductSku
}

interface ProductSerialClientProps {
  data: ProductSerialColumn[]
  purchaseOrder: PurchaseOrder
  supplier: Supplier
  pODetails: PurchaseOrderDetailColumn[]
  warehouseReceipt: WarehouseReceipt
  length: number
  currentParam: string
}

export const ProductSerialClient: React.FC<ProductSerialClientProps> = ({
  data,
  length,
  currentParam,
  purchaseOrder,
  supplier,
  pODetails,
  warehouseReceipt
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const exportExcel = () => {
    toast('Download excel file successfully.')
  }
  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href='/purchaseOrders'>Purchase Orders</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/purchaseOrders/${currentParam}`}>{currentParam}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Warehouse Receipt</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='space-y-4'>
        <div>
          <Heading
            title={`Purchaser Order & Warehouse Receipt Information`}
            description='Manage Purchaser Order & Warehouse Receipt for your store'
          />
          <Separator />
        </div>
        {/* Thông tin Purchase Order & Warehouse Receipt */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
          {/* Purchase Order */}
          <Card>
            <CardHeader>
              <CardTitle>Purchase Order #{purchaseOrder.orderNumber || 'Loading...'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-1 text-sm'>
                <li>
                  <strong>Employee ID:</strong> {warehouseReceipt?.employeeId}
                </li>
                <li>
                  <strong>Supplier:</strong> {supplier.name}
                </li>
                <li>
                  <strong>Order Date: </strong> {purchaseOrder?.orderDate.toISOString().split('T')[0]}
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Warehouse Receipt */}
          <Card>
            <CardHeader>
              <CardTitle>Warehouse Receipt #{warehouseReceipt?.receiptNumber ?? 'Loading...'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-1 text-sm'>
                <li>
                  <strong>Employee ID:</strong> {warehouseReceipt?.employeeId}
                </li>
                <li>
                  <strong>Received Date:</strong> {warehouseReceipt?.receiptDate?.toISOString().split('T')[0]}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <Separator />

        {/* Purchase Order Detail */}
        <div>
          <Heading title='Purchase Order Detail' description='List of items in this purchase order' />
          <Table>
            <TableCaption>A list of purchase order details.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className='text-left w-[100px]'>SKU ID</TableHead>
                <TableHead className='text-left'>Quantity</TableHead>
                <TableHead className='text-right'>Unit Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pODetails.map(detail => (
                <TableRow key={detail.skuId}>
                  <TableCell className='font-medium'>{detail.skuId}</TableCell>
                  <TableCell>{detail.quantity}</TableCell>
                  <TableCell className='text-right'>
                    <Currency className='text-baser' value={detail.unitPrice} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Separator />

        <div>
          <div className='flex items-center justify-between '>
            <Heading title={`Product Serials (${length})`} description='Manage Product Serials for your store' />
            <div className='flex space-x-2'>
              <Button onClick={() => setIsOpen(true)} className='sm:px-4 sm:py-2 px-2 py-1'>
                <PlusCircle />
                <span className='hidden sm:block ml-2'>Add New</span>
              </Button>
              <SerialModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                purchaseOrderId={purchaseOrder.id}
                warehouseReceipt={{
                  id: warehouseReceipt.id,
                  receiptNumber: warehouseReceipt.receiptNumber
                }}
                data={pODetails
                  .filter(detail => detail.sku)
                  .map(detail => ({
                    id: Number(detail.skuId), // Đảm bảo id là number
                    skuNo: detail.sku.skuNo || '',
                    barcode: detail.sku.barcode || '',
                    skuName: detail.sku.skuName || '',
                    image: detail.sku.image || '',
                    status: detail.sku.status ?? true,
                    skuAttributes: detail.sku.skuAttributes || {},
                    slug: detail.sku.slug || ''
                  }))}
              />
              <Button onClick={exportExcel} className='sm:px-4 sm:py-2 px-2 py-1 '>
                <DownloadCloudIcon />
                <span className='hidden sm:block ml-2'>Export File</span>
              </Button>
            </div>
          </div>
          <Separator />

          <div className='bg-white/90 dark:bg-slate-950 rounded-xl'>
            <DataTable searchKey='serialNumber' columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}
