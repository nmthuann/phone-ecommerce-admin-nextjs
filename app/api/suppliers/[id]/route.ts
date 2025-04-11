import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    if (!id) {
      return new NextResponse('Store id is required', { status: 400 })
    }

    const suppliers = await prisma.supplier.findMany({})

    return NextResponse.json(suppliers)
  } catch (error) {
    console.log('[SUPPLIERS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
