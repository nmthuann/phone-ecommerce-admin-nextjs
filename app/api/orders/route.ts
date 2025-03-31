import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const page = searchParams.get('page') ?? '1'
  const size = searchParams.get('size') ?? '10'

  try {
    const orders = await prisma.order.findMany({
      include: {
        orderDetail: true
      },
      skip: (parseInt(page) - 1) * parseInt(size),
      take: parseInt(size)
    })

    return NextResponse.json(orders, { status: 200 })
  } catch (error) {
    console.error('Error fetching data:', error)
    return NextResponse.json({ message: 'Failed to fetch products', error: error }, { status: 500 })
  }
}
