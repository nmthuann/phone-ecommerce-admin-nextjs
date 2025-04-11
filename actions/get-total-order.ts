import prisma from '@/lib/prisma'

export type TotalOrder = {
  previousTotal: number
  currentTotal: number
}
export const getTotalOrder = async (): Promise<TotalOrder> => {
  const now = new Date()
  const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1)
  const previousMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)

  const currentTotal = await prisma.order.count({
    where: {
      createdAt: {
        gte: currentMonthStart,
        lt: nextMonthStart
      }
    }
  })

  const previousTotal = await prisma.order.count({
    where: {
      createdAt: {
        gte: previousMonthStart,
        lt: currentMonthStart
      }
    }
  })

  return {
    previousTotal,
    currentTotal
  }
}
