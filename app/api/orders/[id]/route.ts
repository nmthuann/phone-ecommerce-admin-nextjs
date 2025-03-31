import prisma from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const { userId } = await auth()

    const body = await req.json()

    const { status } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!status) {
      return new NextResponse('Status is required', { status: 400 })
    }

    const order = await prisma.order.update({
      where: {
        id: parseInt(params.id)
      },
      data: {
        status: status
      }
    })

    return NextResponse.json(order)
  } catch (error) {
    console.log('[ORDER_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
