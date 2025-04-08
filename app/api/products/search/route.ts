// app/api/products/search/route.ts

import prisma from '@/lib/prisma'
import { SearchProductResponse } from '@/types/products.type'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('q')

    if (!query) {
      return NextResponse.json({ error: 'Missing search query' }, { status: 400 })
    }

    const products = await prisma.product.findMany({
      select: {
        id: true,
        productName: true,
        slug: true,
        brand: {
          select: {
            brandUrl: true
          }
        }
      },
      where: {
        OR: [{ productName: { contains: query, mode: 'insensitive' } }]
      },

      take: 10
    })

    const res: SearchProductResponse[] = products.map(product => ({
      id: product.id,
      productName: product.productName,
      slug: product.slug,
      brandUrl: product.brand.brandUrl
    }))

    return NextResponse.json(res)
  } catch (err) {
    console.error('[SEARCH_PRODUCTS_ERROR]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
