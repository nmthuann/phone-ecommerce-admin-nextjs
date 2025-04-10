'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AnalyticsTab from './tabs/analytics-tab'
import OverviewTab from './tabs/overview-tab'
import ReportsTab from './tabs/reports-tab'
import NotificationsTab from './tabs/notifications-tab'
import { MonthlyRevenue } from '@/actions/get-monthly-revenue'
import { FC } from 'react'
import { TotalRevenue } from '@/actions/get-total-revenue'

interface TabsSectionProps {
  data: MonthlyRevenue[]
  totalRevenue: TotalRevenue
}
const TabsSection: FC<TabsSectionProps> = ({ data, totalRevenue }) => {
  return (
    <Tabs defaultValue='overview' className='space-y-4 '>
      <TabsList className='bg-slate-50 dark:bg-slate-900'>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='analytics'>Analytics</TabsTrigger>
        <TabsTrigger value='reports'>Reports</TabsTrigger>
        <TabsTrigger value='notifications'>Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value='overview' className='space-y-4'>
        <OverviewTab data={data} totalRevenue={totalRevenue} />
      </TabsContent>
      <TabsContent value='analytics' className='space-y-4 w-full'>
        <AnalyticsTab />
      </TabsContent>
      <TabsContent value='reports' className='space-y-4 w-full'>
        <ReportsTab />
      </TabsContent>
      <TabsContent value='notifications' className='space-y-4 w-full'>
        <NotificationsTab />
      </TabsContent>
    </Tabs>
  )
}

export default TabsSection
