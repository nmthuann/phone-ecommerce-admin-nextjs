import { Metadata } from 'next'
import HeaderDashboard from './components/header-dashboard'
import TabsSection from './components/tabs-section'
import { getMonthlyRevenue } from '@/actions/get-monthly-revenue'
import { getTotalRevenue } from '@/actions/get-total-revenue'
import { getTotalOrder } from '@/actions/get-total-order'
import { getRecentSaleList } from '@/actions/get-recent-sales'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.'
}

export default async function HomePage() {
  const data = await getMonthlyRevenue()
  const recentSales = await getRecentSaleList()
  const totalRevenue = await getTotalRevenue()
  const totalOrder = await getTotalOrder()

  // TODO: Doanh thu theo thời gian (line chart) between A -B
  // TODO: Top sản phẩm bán chạy (bar chart) between A -B
  // TODO: Biểu đồ trạng thái đơn hàng (donut chart) between A -B
  // TODO: Biểu đồ miền COD and STRIPE

  return (
    <div className='pl-10 pr-10 mb-10 -mt-5'>
      <HeaderDashboard />
      <TabsSection data={data} recentSales={recentSales} totalRevenue={totalRevenue} totalOrder={totalOrder} />
    </div>
  )
}
