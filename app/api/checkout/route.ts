import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import prisma from '@/lib/prisma'
import Stripe from 'stripe'
import { OrderType } from '@/constants/order-type.enum'
import { OrderStatus } from '@/constants/order-status.enum'
import { PaymentMethodEnum } from '@/constants/payment-method.enum'
import { sendMailWithNodemailer } from '@/lib/send-mail'
import { generateOrderEmailHtml } from '@/utils/generate'

type CartItem = {
  skuId: number
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
    const { firstName, lastName, email, contactPhone, shippingAddress, paymentMethod, shippingMethod, note, cart } =
      body

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
    for (const item of cart as CartItem[]) {
      const stockCount = await prisma.productSerial.count({
        where: {
          productSkuId: item.skuId,
          status: true // chỉ lấy serial còn hàng
        }
      })

      if (stockCount < 1) {
        return NextResponse.json(
          { error: `Sản phẩm SKU ${item.skuId} chỉ còn ${stockCount} sản phẩm.` },
          { status: 400 }
        )
      }
    }

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
        quantity: 1,
        price_data: {
          currency: 'VND', // VND | USD
          product_data: {
            name: sku.skuName
          },
          unit_amount: sku.price[0].sellingPrice
        }
      })
    }

    // ✅ Bọc tạo order và orderDetail trong transaction
    const order = await prisma.$transaction(
      async tx => {
        const createdOrder = await tx.order.create({
          data: {
            firstName,
            lastName,
            email,
            contactPhone,
            shippingAddress,
            orderType: Boolean(OrderType.ORDER_ONLINE),
            paymentMethod,
            shippingMethod,
            note,
            status: OrderStatus.PENDING,
            employeeId: null
          }
        })

        for (const item of cart as CartItem[]) {
          const productSerial = await tx.productSerial.findFirst({
            where: {
              productSkuId: item.skuId,
              status: true
            },
            include: {
              productSku: {
                include: {
                  price: {
                    orderBy: {
                      beginAt: 'desc'
                    }
                  }
                }
              }
            }
          })

          if (!productSerial) {
            throw new Error(`Không tìm thấy serial hợp lệ cho SKU ${item.skuId}`)
          }

          await tx.orderDetail.create({
            data: {
              orderId: createdOrder.id,
              productSerialId: productSerial.id,
              tax: 0,
              unitPrice: productSerial.productSku.price[0].sellingPrice
            }
          })

          await tx.productSerial.update({
            where: { id: productSerial.id },
            data: { status: false }
          })
        }

        return createdOrder
      },
      {
        timeout: 15000
      }
    )

    const orderDetails = await prisma.orderDetail.findMany({
      where: {
        orderId: order.id
      },
      include: {
        productSerial: {
          include: {
            productSku: true
          }
        }
      }
    })

    const html = generateOrderEmailHtml({
      customerName: `${firstName} ${lastName}`,
      orderId: order.id,
      address: shippingAddress,
      phone: contactPhone,
      note: note || '',
      items: orderDetails.map(item => ({
        name: item.productSerial.productSku.skuName,
        image: item.productSerial.productSku.image,
        quantity: 1,
        price: item.unitPrice
      })),
      total: orderDetails.reduce((total, item) => total + item.unitPrice, 0)
    })

    try {
      const result = await sendMailWithNodemailer(
        'nmt.m10.2862001@gmail.com', // from
        email, // to
        'ĐƠN HÀNG CỦA BẠN ĐÃ ĐƯỢC TẠO THÀNH CÔNG',
        html
      )

      if (result.accepted.length === 0) {
        console.error('❌ Gửi email thất bại:', result.rejected)
        throw new Error('Failed to send email')
      }

      console.log('✅ Email đã được gửi thành công đến:', result.accepted)
    } catch (error) {
      console.error('Lỗi khi gửi email:', error)
      // Tùy bạn xử lý, ví dụ:
      // - Ghi log
      // - Gửi lại sau vài giây
      // - Thông báo lỗi cho admin
    }

    if (paymentMethod === PaymentMethodEnum.COD_PAYMENT_METHOD) {
      return NextResponse.json({
        success: true,
        message: 'Đơn hàng đã được tạo thành công (COD)',
        data: {
          orderId: order.id
        }
      })
    } else {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/checkout?success=1`,
        cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/checkout?canceled=1`,
        metadata: {
          orderId: order.id // orderId
        }
      })
      console.log(session.url)
      return NextResponse.json({
        success: true,
        message: 'Stripe session created successfully',
        data: {
          url: session.url
        }
      })
    }
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
