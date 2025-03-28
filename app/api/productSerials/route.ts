import prisma from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    const body = await req.json()

    const { serialNumber, dateManufactured, productSkuId, warehouseReceiptId } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!serialNumber) {
      return new NextResponse('serialNumber is required', { status: 400 })
    }

    if (!dateManufactured) {
      return new NextResponse('dateManufactured is required', { status: 400 })
    }

    if (!productSkuId) {
      return new NextResponse('productSkuId id is required', { status: 400 })
    }

    if (!warehouseReceiptId) {
      return new NextResponse('warehouseReceiptId id is required', { status: 400 })
    }

    const serial = await prisma.productSerial.create({
      data: {
        serialNumber: serialNumber as string,
        dateManufactured: new Date(dateManufactured),
        productSkuId: productSkuId as number,
        warehouseReceiptId: warehouseReceiptId as number
      }
    })

    return NextResponse.json(serial)
  } catch (error) {
    console.log('[PRODUCT_SERIAL_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
