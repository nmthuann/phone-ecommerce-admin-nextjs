import prisma from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    const body = await req.json()

    const { productSkuId, sellingPrice, displayPrice, beginAt } = body
    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!productSkuId) {
      return new NextResponse('productSkuId is required', { status: 400 })
    }
    if (!sellingPrice) {
      return new NextResponse('sellingPrice is required', { status: 400 })
    }

    if (!displayPrice) {
      return new NextResponse('displayPrice is required', { status: 400 })
    }

    const serial = await prisma.price.create({
      data: {
        beginAt: beginAt,
        sellingPrice: sellingPrice,
        displayPrice: displayPrice,
        productSkuId: productSkuId
      }
    })

    return NextResponse.json(serial)
  } catch (error) {
    console.log('[PRICE_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
