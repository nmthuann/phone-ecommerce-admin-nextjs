import { Metadata } from 'next'
import HeaderDashboard from './components/header-dashboard'
import TabsSection from './components/tabs-section'
import { getMonthlyRevenue } from '@/actions/get-monthly-revenue'
import { getTotalRevenue } from '@/actions/get-total-revenue'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard app built using the components.'
}

export default async function HomePage() {
  // TODO: API GET /api/reports/monthly-revenue
  const data = await getMonthlyRevenue()
  // TODO: API GET /api/reports/top-customers?order=desc&sort=totalAmount
  // TODO: API GET total revenue for the last 2 months
  const totalRevenue = await getTotalRevenue()
  // TODO: API GET total orders
  // TODO: Doanh thu theo thời gian (line chart) between A -B
  // TODO: Top sản phẩm bán chạy (bar chart) between A -B
  // TODO: Biểu đồ trạng thái đơn hàng (donut chart) between A -B
  // TODO: Biểu đồ miền COD and STRIPE

  return (
    <div className='pl-10 pr-10 mb-10 -mt-5'>
      <HeaderDashboard />
      <TabsSection data={data} totalRevenue={totalRevenue} />
    </div>
  )
}
