import prisma from '@/lib/prisma'
import { format } from 'date-fns'

export type MonthlyRevenue = {
  name: string
  total: number
}

export const getMonthlyRevenue = async (): Promise<MonthlyRevenue[]> => {
  const currentYear = new Date().getFullYear()

  const orders = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: new Date(currentYear, 0, 1),
        lt: new Date(currentYear + 1, 0, 1)
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

  const monthMap = new Map<string, number>()
  orders.forEach(order => {
    const monthName = format(order.createdAt, 'MMM')
    const total = order.orderDetail.reduce((sum, item) => sum + item.unitPrice + item.tax, 0)
    monthMap.set(monthName, (monthMap.get(monthName) ?? 0) + total)
  })

  const result: MonthlyRevenue[] = Array.from({ length: 12 }, (_, i) => {
    const monthDate = new Date(currentYear, i)
    const name = format(monthDate, 'MMM')
    const totalInMillions = +((monthMap.get(name) ?? 0) / 1_000_000).toFixed(2) // Làm tròn đến 2 chữ số thập phân

    return {
      name,
      total: totalInMillions ?? 0
    }
  })
  return result
}
