import prisma from '@/lib/prisma'
import { Page, PageMeta } from '@/types/page.type'
import { ProductDetailResponse, ProductResponse } from '@/types/responses.type'
import { convertAttributesToJson } from '@/utils/convert'
import { createSlug } from '@/utils/slug'
import { auth } from '@clerk/nextjs/server'
// import { Product } from '@prisma/client'
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
  const brandUrl = searchParams.get('brandUrl') ?? ''
  const page = searchParams.get('page') ?? '1'
  const size = searchParams.get('size') ?? '10'

  const slug = searchParams.get('slug')

  if (slug) {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        brand: true,
        spuSkuMapping: {
          include: {
            productSku: {
              include: {
                price: {
                  take: 1, // Lấy giá mới nhất
                  orderBy: { beginAt: 'desc' }
                },
                productSerial: true
              }
            }
          }
        }
      }
    })

    if (!product) {
      return new NextResponse(JSON.stringify({ error: 'Product not found' }), { status: 404 })
    }

    // 🔥 Map dữ liệu sang `ProductDetail`
    const productDetail: ProductDetailResponse = {
      id: product.id,
      productName: product.productName,
      slug: product.slug,
      productLine: product.productLine,
      description: product.description,
      status: product.status,
      productSpecs: product.productSpecs as Record<string, string>,
      brandName: product.brand.brandName,
      sku: product.spuSkuMapping.map(mapping => ({
        id: mapping.productSku.id,
        skuNo: mapping.productSku.skuNo,
        barcode: mapping.productSku.barcode,
        skuName: mapping.productSku.skuName,
        image: mapping.productSku.image,
        status: mapping.productSku.status,
        skuAttributes: mapping.productSku.skuAttributes as Record<string, string>,
        slug: mapping.productSku.slug,
        sellingPrice: mapping.productSku.price[0]?.sellingPrice ?? 0,
        displayPrice: mapping.productSku.price[0]?.displayPrice ?? 0,
        stock: mapping.productSku.productSerial.length
      }))
    }

    return NextResponse.json(productDetail)
  }
  try {
    if (brandUrl) {
      const brand = await prisma.brand.findUnique({
        where: { brandUrl }
      })
      if (!brand) {
        return NextResponse.json([])
      }

      const products = await prisma.product.findMany({
        where: { brandId: brand.id },
        skip: (parseInt(page) - 1) * parseInt(size),
        take: parseInt(size),
        include: {
          brand: true,
          spuSkuMapping: {
            include: {
              productSku: {
                include: {
                  price: {
                    take: 1, // Chỉ lấy giá mới nhất
                    orderBy: { beginAt: 'desc' }
                  }
                }
              }
            }
          }
        }
      })

      const productResponses: ProductResponse[] = products.map(product => ({
        id: product.id,
        productName: product.productName,
        slug: product.slug,
        brandName: product.brand.brandName,
        brandUrl: product.brand.brandUrl,
        skus: product.spuSkuMapping.map(mapping => ({
          id: mapping.productSku.id,
          skuName: mapping.productSku.skuName,
          image: mapping.productSku.image,
          slug: mapping.productSku.slug,
          skuAttributes: mapping.productSku.skuAttributes as Record<string, string>, // Ép kiểu JSON thành Record
          sellingPrice: mapping.productSku.price[0]?.sellingPrice ?? 0, // Lấy giá mới nhất hoặc 0 nếu không có
          displayPrice: mapping.productSku.price[0]?.displayPrice ?? 0
        }))
      }))

      const itemCount = await prisma.product.count({
        where: { brandId: brand.id }
      })

      const pageCount = Math.ceil(itemCount / parseInt(size))
      const meta: PageMeta = {
        page: parseInt(page),
        take: parseInt(size),
        itemCount,
        pageCount,
        hasPreviousPage: parseInt(page) > 1,
        hasNextPage: parseInt(page) < pageCount
      }

      const response: Page<ProductResponse> = {
        data: productResponses,
        meta
      }

      return NextResponse.json(response)
    }

    return NextResponse.json({
      data: [],
      meta: {
        page: parseInt(page),
        take: parseInt(size),
        itemCount: 0,
        pageCount: 0,
        hasPreviousPage: false,
        hasNextPage: false
      }
    })
  } catch (error) {
    console.log('[PRODUCTS_GET]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
