import { SystemError } from '@/constants/errors/errors'
import { PriceResponse } from '@/types/products.type'

export async function getPricesBySkuId(skuId: number): Promise<PriceResponse[]> {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/skus/${skuId}/prices`
  const options = {
    method: 'GET',
    next: { revalidate: 0 },
    headers: {
      'X-Rest-Api-Version': `${process.env.NEXT_PUBLIC_BACKEND_VERSION_API}`
    }
  }

  try {
    const res = await fetch(URL, options)
    if (!res.ok) {
      console.error(`Error fetching data: ${res.statusText}`)
      throw new Error(SystemError.FETCH_DATA_ERROR)
    }
    const data: PriceResponse[] = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error(SystemError.FETCH_DATA_ERROR)
  }
}
