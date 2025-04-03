import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import prisma from '@/lib/prisma'
import Stripe from 'stripe'
import { OrderType } from '@/constants/order-type.enum'
import { OrderStatus } from '@/constants/order-status.enum'

type CartItem = {
  skuId: number
  quantity: number
}

const corsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeader })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, contactPhone, shippingAddress, paymentMethod, shippingMethod, cart } = body

    if (!firstName) {
      return new NextResponse('firstName', { status: 400 })
    }

    if (!lastName) {
      return new NextResponse('lastName', { status: 400 })
    }

    if (!email) {
      return new NextResponse('email is missing', { status: 400 })
    }

    if (!contactPhone) {
      return new NextResponse('contactPhone is missing', { status: 400 })
    }

    if (!shippingAddress) {
      return new NextResponse('shippingAddress is missing', { status: 400 })
    }

    if (!paymentMethod) {
      return new NextResponse('paymentMethod is missing', { status: 400 })
    }

    if (!shippingMethod) {
      return new NextResponse('shippingMethod is missing', { status: 400 })
    }

    if (!cart) {
      return new NextResponse('cart is missing', { status: 400 })
    }

    // Kiểm tra tồn kho
    for (const item of cart) {
      const stockCount = await prisma.productSerial.count({
        where: {
          productSkuId: item.skuId
        }
      })

      if (stockCount < item.quantity) {
        return NextResponse.json(
          { error: `Sản phẩm SKU ${item.skuId} chỉ còn ${stockCount} sản phẩm.` },
          { status: 400 }
        )
      }
    }

    const headersList = await headers()
    const origin = headersList.get('origin')

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = []

    for (const item of cart as CartItem[]) {
      const sku = await prisma.productSku.findUnique({
        where: {
          id: item.skuId
        },
        include: {
          price: {
            orderBy: {
              beginAt: 'desc'
            }
          }
        }
      })

      if (!sku || !sku.price.length) {
        return NextResponse.json({ error: `Không tìm thấy giá cho SKU ${item.skuId}` }, { status: 400 })
      }

      line_items.push({
        quantity: item.quantity,
        price_data: {
          currency: 'VND', // VND USD
          product_data: {
            name: sku.skuName
          },
          unit_amount: sku.price[0].sellingPrice
        }
      })
    }

    // create Order
    const order = await prisma.order.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactPhone: contactPhone,
        shippingAddress: shippingAddress,
        orderType: Boolean(OrderType.ORDER_ONLINE),
        paymentMethod: paymentMethod,
        shippingMethod: shippingMethod,
        note: null,
        status: OrderStatus.PENDING,
        employeeId: null
      }
    })

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${origin}/cart?success=1`,
      cancel_url: `${origin}/cart?canceled=1`,
      metadata: {
        orderId: order.id // orderId
      }
    })
    console.log(session.url)
    return NextResponse.json(session.url!)
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
