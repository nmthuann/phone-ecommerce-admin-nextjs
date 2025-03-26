import prisma from '@/lib/prisma'
import { convertAttributesToJson } from '@/utils/convert'
import { createSlug } from '@/utils/slug'
import { auth } from '@clerk/nextjs/server'
import { Prisma } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { userId } = await auth()

    const body = await req.json()

    const { image, barcode, skuNo, skuName, status, skuAttributes, productId } = body

    if (!userId) {
      return new NextResponse('Unauthenticated', { status: 403 })
    }

    if (!barcode) {
      return new NextResponse('barcode', { status: 400 })
    }
    if (!skuNo) {
      return new NextResponse('skuNo', { status: 400 })
    }

    if (!skuName) {
      return new NextResponse('skuName', { status: 400 })
    }

    if (!status) {
      return new NextResponse('status', { status: 400 })
    }

    const createdSku = await prisma.$transaction(
      async prisma => {
        // Tạo SKU mới
        const newSku = await prisma.productSku.create({
          data: {
            image: image || 'https://res.cloudinary.com/ddyreawwf/image/upload/v1732779960/no-image_ur9qsg.jpg',
            barcode,
            skuNo,
            skuName,
            slug: `/${createSlug(skuName)}`,
            status: Boolean(status),
            skuAttributes: convertAttributesToJson(skuAttributes)
          }
        })

        // Tạo SPU-SKU mapping bằng createMany
        await prisma.spuSkuMapping.createMany({
          data: [{ spuId: parseInt(productId), skuId: newSku.id }]
        })

        return newSku // Chỉ trả về SKU
      },
      {
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable
      }
    )

    return NextResponse.json(createdSku)
  } catch (error) {
    console.log('[SKU_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
