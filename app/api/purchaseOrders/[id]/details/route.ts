import prisma from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    const body = await req.json()

    const { purchaseOrderId, skuNo, unitPrice, quantity } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!skuNo) {
      return new NextResponse('Sku No is required', { status: 400 })
    }

    if (!unitPrice) {
      return new NextResponse('Unit Price is required', { status: 400 })
    }

    if (!quantity) {
      return new NextResponse('quantity id is required', { status: 400 })
    }

    console.log(userId)
    console.log(purchaseOrderId)
    const findSku = await prisma.productSku.findUniqueOrThrow({
      where: {
        skuNo: skuNo
      }
    })

    const purchaseOrderDetail = await prisma.purchaseOrderDetail.create({
      data: {
        purchaseOrderId: purchaseOrderId as number,
        skuId: findSku.id,
        unitPrice: unitPrice,
        quantity: quantity as number
      }
    })

    return NextResponse.json(purchaseOrderDetail)
  } catch (error) {
    console.log('[PURCHASE_ORDER_DETAIL_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
