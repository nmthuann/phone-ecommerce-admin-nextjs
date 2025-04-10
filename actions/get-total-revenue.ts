import prisma from '@/lib/prisma'
export type TotalRevenue = {
  previousRevenue: number
  currentRevenue: number
}
export const getTotalRevenue = async (): Promise<TotalRevenue> => {
  const now = new Date()
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1)
  const previousMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const orders = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: previousMonthStart,
        lt: nextMonthStart
      }
    },
    select: {
      createdAt: true,
      orderDetail: {
        select: {
          unitPrice: true,
          tax: true
        }
      }
    }
  })

  let previousRevenue = 0
  let currentRevenue = 0
  for (const order of orders) {
    const total = order.orderDetail.reduce((sum, item) => sum + item.unitPrice + item.tax, 0)
    if (order.createdAt > currentMonthStart) {
      currentRevenue += total
    } else {
      previousRevenue += total
    }
  }
  return { currentRevenue, previousRevenue }
}
