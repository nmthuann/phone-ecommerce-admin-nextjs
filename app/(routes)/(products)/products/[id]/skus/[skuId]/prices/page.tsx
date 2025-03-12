import ErrorComponent from '@/components/errors/error-component'
import { PriceColumn } from './components/columns'
import { Metadata } from 'next'
import { format, parseISO } from 'date-fns'
import { PriceResponse } from '@/types/products.type'
import { getPricesBySkuId } from '@/actions/products/get-prices'
import { PriceClient } from './components/client'
export const metadata: Metadata = {
  title: 'Prices',
  description: 'Prices Management Table.'
}
const PricesPage = async ({ params }: { params: Promise<{ id: string; skuId: string }> }) => {
  const { id, skuId } = await params
  try {
    const prices: PriceResponse[] = await getPricesBySkuId(parseInt(skuId, 10))
    const formattedData: PriceColumn[] = prices.map((item: PriceResponse) => ({
      productSkuId: String(item.productSkuId),
      beginAt: format(parseISO(String(item.beginAt)), 'yyyy-MM-dd HH:mm:ss'),
      displayPrice: String(item.displayPrice),
      sellingPrice: String(item.sellingPrice),
      createdAt: format(parseISO(String(item.createdAt)), 'yyyy-MM-dd HH:mm:ss')
    }))

    return (
      <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6 '>
          <PriceClient data={formattedData} length={prices.length} previousParam={id} currentParam={skuId} />
        </div>
      </div>
    )
  } catch (error: unknown) {
    console.log(error)
    return <ErrorComponent page='Prices Page' message='Failed to load Prices. Please try again later.' />
  }
}

export default PricesPage
