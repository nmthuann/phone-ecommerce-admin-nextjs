import { Metadata } from 'next'
import { ProductSerialResponse } from '@/types/inventories.type'
import ErrorComponent from '@/components/errors/error-component'
import { getProductSerialsBywarehouseReceiptId } from '@/actions/inventories/get-product-serials'
import { ProductSerialClient } from './components/client'
import { ProductSerialColumn } from './components/columns'

export const metadata: Metadata = {
  title: 'Product Serials Page',
  description: 'Product Serials Management Table.'
}

const ProductSerialsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  try {
    const res = await getProductSerialsBywarehouseReceiptId(parseInt(id, 10), 1, 10)
    console.log(res)
    if (!res) {
      return (
        <ErrorComponent page='Product Serials Page' message='Failed to load Product Serials. Please try again later.' />
      )
    }

    const formattedData: ProductSerialColumn[] | undefined = res.data.map((item: ProductSerialResponse) => ({
      id: item.id,
      serialNumber: item.serialNumber,
      dateManufactured: String(item.dateManufactured),
      productSkuId: String(item.sku.id),
      barcode: item.sku.barcode,
      skuNo: item.sku.skuNo,
      skuName: item.sku.skuName,
      image: item.sku.image,
      status: item.sku.status,
      skuAttributes: item.sku.skuAttributes,
      slug: item.sku.slug
    }))
    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <ProductSerialClient data={formattedData} length={res.meta.itemCount} currentParam={id} />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return (
      <ErrorComponent page='Product Serials Page' message='Failed to load Product Serials. Please try again later.' />
    )
  }
}

export default ProductSerialsPage
