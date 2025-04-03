import { NextRequest, NextResponse } from 'next/server'

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

    if (!brandAbbreviation) {
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
    console.log('[BRANDS_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  console.log('req.url::: ', req.url)
  const searchParams = req.nextUrl.searchParams
  const brandUrl = searchParams.get('brandUrl')
  if (brandUrl) {
    console.log('brandUrl', brandUrl)

    const brand = await prisma.brand.findUnique({
      where: {
        brandUrl: brandUrl
      }
    })
    if (!brand) {
      return new NextResponse(JSON.stringify({ error: 'Brand not found' }), { status: 404 })
    }
    return NextResponse.json(brand)
  }

  try {
    const brands = await prisma.brand.findMany()
    // return NextResponse.json(brands)

    return new Response(JSON.stringify(brands), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })
  } catch (error) {
    console.log('[BRANDS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
