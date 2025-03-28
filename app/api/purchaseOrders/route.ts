import prisma from '@/lib/prisma'
import { auth, currentUser } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const user = await currentUser()
    const { userId } = await auth()

    const body = await req.json()

    const { orderNumber, supplierId, orderDate } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!user) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!orderNumber) {
      return new NextResponse('orderNumber is required', { status: 400 })
    }

    if (!supplierId) {
      return new NextResponse('supplierId is required', { status: 400 })
    }

    if (!orderDate) {
      return new NextResponse('orderDate id is required', { status: 400 })
    }

    console.log(userId)
    console.log(user.emailAddresses[0].emailAddress)

    const product = await prisma.purchaseOrder.create({
      data: {
        orderNumber: orderNumber as string,
        supplierId: supplierId as number,
        orderDate: new Date(orderDate),
        employeeId: user.emailAddresses[0].emailAddress
      }
    })

    return NextResponse.json(product)
  } catch (error) {
    console.log('[PURCHASES_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams
    const orderNumber = searchParams.get('orderNumber') ?? '10'
    const page = searchParams.get('page') ?? '1'
    const size = searchParams.get('size') ?? '10'

    if (orderNumber) {
      if (typeof orderNumber !== 'string') {
        return new NextResponse('Invalid order number', { status: 400 })
      }

      const purchaseOrder = await prisma.purchaseOrder.findUnique({
        where: { orderNumber },
        include: { warehouseReceipt: true }
      })

      if (!purchaseOrder) {
        return new NextResponse('Purchase order not found', { status: 404 })
      }
      return NextResponse.json(purchaseOrder)
    } else {
      const purchaseOrders = await prisma.purchaseOrder.findMany({
        skip: (parseInt(page) - 1) * parseInt(size),
        take: parseInt(size)
      })
      return NextResponse.json(purchaseOrders)
    }
  } catch (error) {
    console.error('Error fetching purchase orders:', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
