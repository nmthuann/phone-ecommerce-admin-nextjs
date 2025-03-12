import { SystemError } from '@/constants/errors/errors'
import { ProductSkuResponse } from '@/types/products.type'

export async function getProductSkusByProductId(productId: number): Promise<ProductSkuResponse[]> {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/skus?productId=${productId}`
  const options = {
    method: 'GET',
    next: { revalidate: 0 }
  }

  try {
    const res = await fetch(URL, options)
    if (!res.ok) {
      console.error(`Error fetching data: ${res.statusText}`)
      throw new Error(SystemError.FETCH_DATA_ERROR)
    }
    const data: ProductSkuResponse[] = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error(SystemError.FETCH_DATA_ERROR)
  }
}
