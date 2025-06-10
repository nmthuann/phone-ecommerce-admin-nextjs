'use client'
import { Button } from '@/components/ui/button'
import { FileDown, RefreshCcw } from 'lucide-react'
import { Heading } from '@/components/ui/heading'
import { CalendarDateRangePicker } from './date-range-picker'

const HeaderDashboard = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between space-y-2'>
      <Heading title='Dashboard' description='Overview of your store' />
      <div className='flex items-center space-x-2 space-y-2'>
        <CalendarDateRangePicker />
        <Button size='icon' className='dark:bg-slate-900'>
          <FileDown className='h-4 w-4 text-white' />
        </Button>
        <Button className='bg-white' variant='outline' size='icon'>
          <RefreshCcw className='h-4 w-4 text-slate-950' />
        </Button>
      </div>
    </div>
  )
}

export default HeaderDashboard
