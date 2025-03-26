import { NextResponse } from 'next/server'

import { auth } from '@clerk/nextjs/server'
import { BrandError } from '@/constants/errors.enum'
import prisma from '@/lib/prisma'
import { createSlug } from '@/utils/slug'

export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    const body = await req.json()

    const { brandName, description, brandAbbreviation } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!brandName) {
      return new NextResponse(BrandError.NAME_MISSING, { status: 400 })
    }
    if (!description) {
      return new NextResponse(BrandError.DESCRIPTION_MISSING, { status: 400 })
    }

    if (!description) {
      return new NextResponse('brandAbbreviation is missing', { status: 400 })
    }

    const brand = await prisma.brand.create({
      data: {
        brandName,
        description,
        brandUrl: `/${createSlug(brandName)}`,
        brandAbbreviation
      }
    })

    return NextResponse.json(brand)
  } catch (error) {
    console.log('[brandS_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function GET() {
  try {
    const brands = await prisma.brand.findMany()

    return NextResponse.json(brands)
  } catch (error) {
    console.log('[brandS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
