import prisma from '@/lib/prisma'
import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const user = await currentUser()
    const { userId } = await auth()

    const body = await req.json()

    const { receiptNumber, purchaseOrderId, receiptDate } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!user) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!receiptNumber) {
      return new NextResponse('orderNumber is required', { status: 400 })
    }

    if (!purchaseOrderId) {
      return new NextResponse('supplierId is required', { status: 400 })
    }

    if (!receiptDate) {
      return new NextResponse('orderDate id is required', { status: 400 })
    }

    const product = await prisma.warehouseReceipt.create({
      data: {
        receiptNumber: receiptNumber as string,
        purchaseOrderId: purchaseOrderId as number,
        receiptDate: new Date(receiptDate),
        employeeId: user.emailAddresses[0].emailAddress
      }
    })

    return NextResponse.json(product)
  } catch (error) {
    console.log('[WAREHOUSE_RECEIPT_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
