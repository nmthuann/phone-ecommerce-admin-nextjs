import { OrderStatus } from '@/constants/order-status.enum'
import prisma from '@/lib/prisma'
import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = (await headers()).get('Stripe-Signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET as string)
  } catch (err) {
    return new NextResponse(`Webhook Error: ${err}`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session
  if (!session?.metadata?.orderId) {
    return new NextResponse('Missing orderId in metadata', { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    await prisma.order.update({
      where: {
        id: parseInt(session.metadata.orderId)
      },
      data: {
        status: OrderStatus.PAID
      },
      include: {
        orderDetail: true
      }
    })
    return new NextResponse(null, { status: 200 })
  }
}
