'use server'
import { ProductResponse } from '@/types/product.type'
import { Page } from '@/types/responses/page.type'
import { promises as fs } from 'fs'
import path from 'path'

export async function getProductByPage(size: number, page: number): Promise<Page<ProductResponse>> {
  console.log('size', size, 'page', page)
  try {
    const data = await fs.readFile(path.join(process.cwd(), 'data/mocks/product-pagination.json'))

    const products = JSON.parse(data.toString())
    return (await products) as Page<ProductResponse>
  } catch (error) {
    console.error('Error fetching the JSON data:', error)
    throw error
  }
}
