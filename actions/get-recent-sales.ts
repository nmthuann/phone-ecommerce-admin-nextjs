import prisma from '@/lib/prisma'

export type RecentSale = {
  email: string
  name: string
  amount: number
}

export const getRecentSaleList = async (): Promise<RecentSale[]> => {
  const now = new Date()
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1)

  const orders = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: currentMonthStart,
        lt: nextMonthStart
      }
    },
    select: {
      firstName: true,
      lastName: true,
      email: true,
      orderDetail: {
        select: {
          unitPrice: true,
          tax: true
        }
      }
    }
  })

  const buyerMap = new Map<string, { name: string; totalAmount: number }>()
  for (const order of orders) {
    const email: string = order.email
    const name: string = `${order.firstName} ${order.lastName}`
    const total: number = order.orderDetail.reduce(
      (
        sum: number,
        item: {
          unitPrice: number
          tax: number
        }
      ) => sum + item.unitPrice + item.tax,
      0
    )

    if (buyerMap.has(email)) {
      const existing = buyerMap.get(email)!
      existing.totalAmount += total
    } else {
      buyerMap.set(email, { name, totalAmount: total })
    }
  }

  const sorted = Array.from(buyerMap.entries())
    .sort((a, b) => b[1].totalAmount - a[1].totalAmount)
    .slice(0, 5)
    .map(([email, data]) => ({
      email,
      name: data.name,
      amount: data.totalAmount
    }))

  return sorted
}
