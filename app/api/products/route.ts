import { OrderBy } from '@/constants/order-by.enum'
import { ProductResponse } from '@/types/products.type'
import { Page } from '@/types/responses/page.type'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const page = searchParams.get('page') ?? '1'
  const size = searchParams.get('size') ?? '10'

  const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products?page=${page}&take=${size}&order=${OrderBy.ASCENDING}`
  const options = {
    method: 'GET',
    next: { revalidate: 0 }
  }

  try {
    const res = await fetch(URL, options)
    if (!res.ok) {
      const errorResponse = await res.json().catch(() => ({}))
      return NextResponse.json(errorResponse, { status: res.status })
    }
    const paginatedResponse: Page<ProductResponse> = await res.json()
    return NextResponse.json(paginatedResponse, { status: 200 })
  } catch (error) {
    console.error('Error fetching data:', error)
    return NextResponse.json({ message: 'Failed to fetch products', error: error }, { status: 500 })
  }
}
