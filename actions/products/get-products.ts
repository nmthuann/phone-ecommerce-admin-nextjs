import { OrderBy } from '@/constants/enums/order-by.enum'
import { SystemError } from '@/constants/errors/errors'
import { ProductResponse } from '@/types/products.type'
import { Page } from '@/types/responses/page.type'

export async function getProductsByPage(page: number, size: number): Promise<Page<ProductResponse>> {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products?page=${page}&take=${size}&order=${OrderBy.ASCENDING}`
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
    const data: Page<ProductResponse> = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error(SystemError.FETCH_DATA_ERROR)
  }
}
