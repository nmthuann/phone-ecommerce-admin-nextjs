import { OrderBy } from '@/constants/order-by.enum'
import { SystemError } from '@/constants/errors.enum'
import { ProductSerialResponse } from '@/types/inventories.type'
import { Page } from '@/types/responses/page.type'

export async function getProductSerialsBywarehouseReceiptId(
  warehouseReceiptId: number,
  page: number,
  size: number
): Promise<Page<ProductSerialResponse>> {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/productSerials?warehouseReceiptId=${warehouseReceiptId}&page=${page}&take=${size}&order=${OrderBy.ASCENDING}`
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
    const data: Page<ProductSerialResponse> = await res.json()

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error(SystemError.FETCH_DATA_ERROR)
  }
}
