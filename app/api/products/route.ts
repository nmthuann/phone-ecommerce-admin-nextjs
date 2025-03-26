import prisma from '@/lib/prisma'
import { convertAttributesToJson } from '@/utils/convert'
import { createSlug } from '@/utils/slug'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    const body = await req.json()

    const { productName, productLine, brandId, status, description, productSpecs } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!productName) {
      return new NextResponse('productName is required', { status: 400 })
    }

    if (!productLine) {
      return new NextResponse('productLine is required', { status: 400 })
    }

    if (!brandId) {
      return new NextResponse('brandId id is required', { status: 400 })
    }
    if (!status) {
      return new NextResponse('status id is required', { status: 400 })
    }
    if (!description) {
      return new NextResponse('description id is required', { status: 400 })
    }
    if (!productSpecs) {
      return new NextResponse('productSpecs id is required', { status: 400 })
    }

    const product = await prisma.product.create({
      data: {
        productName: productName as string,
        slug: `/${createSlug(productName)}`,
        productLine: productLine as string,
        status: status as boolean,
        brandId: brandId as number,
        description: description as string,
        productSpecs: convertAttributesToJson(productSpecs)
      }
    })

    return NextResponse.json(product)
  } catch (error) {
    console.log('[PRODUCTS_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const page = searchParams.get('page') ?? '1'
  const size = searchParams.get('size') ?? '10'
  const brandUrl = searchParams.get('brandUrl') ?? ''

  try {
    const brand = await prisma.brand.findUnique({
      where: {
        brandUrl: brandUrl
      }
    })

    const products = await prisma.product.findMany({
      where: {
        brandId: brand?.id
      },
      include: {
        brand: true
      },
      skip: (parseInt(page) - 1) * parseInt(size),
      take: parseInt(size)
    })

    return NextResponse.json(products)
  } catch (error) {
    console.log('[PRODUCT_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
