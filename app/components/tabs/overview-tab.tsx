'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Overview } from './overviews/overview'
import { RecentSales } from './overviews/recent-sales'
import StatisticsCards from './overviews/statistics-cards'
import { MonthlyRevenue } from '@/actions/get-monthly-revenue'
import { FC } from 'react'
import { TotalRevenue } from '@/actions/get-total-revenue'
interface OverviewTabProps {
  data: MonthlyRevenue[]
  totalRevenue: TotalRevenue
}
const OverviewTab: FC<OverviewTabProps> = ({ data, totalRevenue }) => {
  return (
    <div>
      <StatisticsCards totalRevenue={totalRevenue} />
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='col-span-4 '>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className='pl-2'>
            <Overview data={data} />
          </CardContent>
        </Card>
        <Card className='col-span-3'>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default OverviewTab
