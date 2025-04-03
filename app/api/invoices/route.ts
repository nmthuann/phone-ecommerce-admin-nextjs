import prisma from '@/lib/prisma'
import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const user = await currentUser()
    const { userId } = await auth()

    const body = await req.json()

    const { orderId, invoiceCode, taxCode, notes } = body

    if (!userId) {
      return new NextResponse('<<userId>> Unauthenticated', { status: 403 })
    }

    if (!user) {
      return new NextResponse('<<user>> Unauthenticated', { status: 403 })
    }

    if (!orderId) {
      return new NextResponse('orderId is required', { status: 400 })
    }

    if (!invoiceCode) {
      return new NextResponse('invoiceCode is required', { status: 400 })
    }

    if (!taxCode) {
      return new NextResponse('taxCode is required', { status: 400 })
    }

    if (!notes) {
      return new NextResponse('notes id is required', { status: 400 })
    }

    console.log(userId)
    console.log(user.emailAddresses[0].emailAddress)

    const order = await prisma.order.findUniqueOrThrow({
      where: {
        id: parseInt(orderId, 10)
      },
      include: {
        orderDetail: true
      }
    })

    const invoice = await prisma.invoice.create({
      data: {
        invoiceCode: invoiceCode as string,
        orderId: parseInt(orderId, 10),
        taxCode: taxCode,
        subtotal: order.orderDetail.reduce((sum, detail) => sum + detail.unitPrice * 1, 0),
        taxAmount: 0,
        totalAmount: order.orderDetail.reduce((sum, detail) => sum + detail.unitPrice * 1, 0),
        notes: notes,
        employeeId: user.emailAddresses[0].emailAddress
      }
    })

    return NextResponse.json(invoice)
  } catch (error) {
    console.log('[INVOICES_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
