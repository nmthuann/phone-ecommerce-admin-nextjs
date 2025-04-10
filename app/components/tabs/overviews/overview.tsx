'use client'

import { MonthlyRevenue } from '@/actions/get-monthly-revenue'
import { FC } from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface OverviewProps {
  data: MonthlyRevenue[]
}
export const Overview: FC<OverviewProps> = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <Tooltip />
        <XAxis dataKey='name' stroke='#888888' fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: string) => `${value} tr (VND)`}
        />
        <Bar dataKey='total' radius={[4, 4, 0, 0]} className='fill-sky-600' />
      </BarChart>
    </ResponsiveContainer>
  )
}

// const data = [
//   {
//     name: 'Jan',
//     total: Math.floor(Math.random() * 5000) + 1000
//   },
//   {
//     name: 'Feb',
//     total: Math.floor(Math.random() * 5000) + 1000
//   },
//   {
//     name: 'Mar',
//     total: Math.floor(Math.random() * 5000) + 1000
//   },
//   {
//     name: 'Apr',
//     total: Math.floor(Math.random() * 5000) + 1000
//   },
//   {
//     name: 'May',
//     total: Math.floor(Math.random() * 5000) + 1000
//   },
//   {
//     name: 'Jun',
//     total: Math.floor(Math.random() * 5000) + 1000
//   },
//   {
//     name: 'Jul',
//     total: Math.floor(Math.random() * 5000) + 1000
//   },
//   {
//     name: 'Aug',
//     total: Math.floor(Math.random() * 5000) + 1000
//   },
//   {
//     name: 'Sep',
//     total: Math.floor(Math.random() * 5000) + 1000
//   },
//   {
//     name: 'Oct',
//     total: Math.floor(Math.random() * 5000) + 1000
//   },
//   {
//     name: 'Nov',
//     total: Math.floor(Math.random() * 5000) + 1000
//   },
//   {
//     name: 'Dec',
//     total: Math.floor(Math.random() * 5000) + 1000
//   }
// ]
