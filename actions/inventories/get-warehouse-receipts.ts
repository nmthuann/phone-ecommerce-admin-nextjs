import { OrderBy } from '@/constants/order-by.enum'
import { SystemError } from '@/constants/errors.enum'
import { WarehouseReceiptResponse } from '@/types/inventories.type'
import { Page } from '@/types/responses/page.type'

export async function getWarehouseReceiptsByPage(page: number, size: number): Promise<Page<WarehouseReceiptResponse>> {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/warehouseReceipts?page=${page}&take=${size}&order=${OrderBy.ASCENDING}`
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
    const data: Page<WarehouseReceiptResponse> = await res.json()

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error(SystemError.FETCH_DATA_ERROR)
  }
}

export async function getWarehouseReceiptsByReceiptDate(
  page: number,
  size: number,
  orderDate: Date
): Promise<Page<WarehouseReceiptResponse>> {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/warehouseReceipts?page=${page}&take=${size}&orderDate=${orderDate}&order=${OrderBy.ASCENDING}`
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
    const data: Page<WarehouseReceiptResponse> = await res.json()

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error(SystemError.FETCH_DATA_ERROR)
  }
}
