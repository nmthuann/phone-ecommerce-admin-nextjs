'use server'
import { SystemError } from '@/constants/errors.enum'
import { Supplier } from '@/types/inventories.type'

export async function getSuppliers(): Promise<Supplier[]> {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/suppliers`
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
    const data: Supplier[] = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error(SystemError.FETCH_DATA_ERROR)
  }
}
