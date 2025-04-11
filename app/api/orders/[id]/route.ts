import prisma from '@/lib/prisma'
import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const { userId } = await auth()
    const user = await currentUser()

    const body = await req.json()

    const { status } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!user) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!status) {
      return new NextResponse('Status is required', { status: 400 })
    }

    const order = await prisma.order.update({
      where: {
        id: parseInt(id)
      },
      data: {
        status: status,
        employeeId: user.emailAddresses[0].emailAddress
      }
    })

    return NextResponse.json(order)
  } catch (error) {
    console.log('[ORDER_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
