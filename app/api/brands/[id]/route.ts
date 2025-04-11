import { BrandError } from '@/constants/errors.enum'
import prisma from '@/lib/prisma'
import { createSlug } from '@/utils/slug'
import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    if (!id) {
      return new NextResponse('brand id is required', { status: 400 })
    }

    const brand = await prisma.brand.findUnique({
      where: {
        id: parseInt(id)
      }
    })

    return NextResponse.json(brand)
  } catch (error) {
    console.log('[brand_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const { userId } = await auth()

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!id) {
      return new NextResponse('brand id is required', { status: 400 })
    }

    const brand = await prisma.brand.delete({
      where: {
        id: parseInt(id)
      }
    })

    return NextResponse.json(brand)
  } catch (error) {
    console.log('[brand_DELETE]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const { userId } = await auth()

    const body = await req.json()

    const { brandName, description, brandAbbreviation } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!brandName) {
      return new NextResponse(BrandError.NAME_MISSING, { status: 400 })
    }
    if (!brandAbbreviation) {
      return new NextResponse('brandAbbreviation', { status: 400 })
    }
    if (!description) {
      return new NextResponse(BrandError.DESCRIPTION_MISSING, { status: 400 })
    }

    if (!id) {
      return new NextResponse('brand id is required', { status: 400 })
    }

    const brand = await prisma.brand.update({
      where: {
        id: parseInt(id)
      },
      data: {
        brandName,
        description,
        brandUrl: `/${createSlug(brandName)}`
      }
    })

    return NextResponse.json(brand)
  } catch (error) {
    console.log('[brand_PATCH]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
