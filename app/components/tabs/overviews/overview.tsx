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
