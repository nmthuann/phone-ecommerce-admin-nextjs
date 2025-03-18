import { SystemError } from '@/constants/errors/errors'
import { Order } from '@/types/orders.type'

export async function getOrderById(id: number): Promise<Order | null> {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/orders/${id}`
  const options = {
    method: 'GET',
    next: { revalidate: 0 }
  }

  try {
    const res = await fetch(URL, options)

    if (res.status === 404) {
      console.warn(`Purchase Order not found: ${id}`)
      return null
    }

    if (!res.ok) {
      console.error(`Error fetching data: ${res.statusText}`)
      throw new Error(SystemError.FETCH_DATA_ERROR)
    }

    return await res.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error(SystemError.FETCH_DATA_ERROR)
  }
}
