import prisma from '@/lib/prisma'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    const body = await req.json()

    const { name, phone, email, address } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!name) {
      return new NextResponse('name is required', { status: 400 })
    }

    if (!email) {
      return new NextResponse('email is required', { status: 400 })
    }

    if (!phone) {
      return new NextResponse('phone is required', { status: 400 })
    }
    if (!address) {
      return new NextResponse('address is required', { status: 400 })
    }

    const supplier = await prisma.supplier.create({
      data: {
        name,
        phone,
        email,
        address
      }
    })

    return NextResponse.json(supplier)
  } catch (error) {
    console.log('[SUPPLIERS_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
