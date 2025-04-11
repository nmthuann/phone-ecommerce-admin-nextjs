'use client'

import { TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

export const description = 'A stacked area chart'

const chartData = [
  { month: 'Jan', cod: 160, stripe: 80 },
  { month: 'Feb', cod: 100, stripe: 100 },
  { month: 'Mar', cod: 140, stripe: 130 },
  { month: 'Apr', cod: 90, stripe: 160 },
  { month: 'May', cod: 130, stripe: 190 },
  { month: 'Jun', cod: 110, stripe: 220 }
]
const chartConfig = {
  stripe: {
    label: 'STRIPE',
    color: 'hsl(var(--chart-1))'
  },
  cod: {
    label: 'COD',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig

export function ProductChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>Showing total Payment Method for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={value => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='dot' />} />
            <Area
              dataKey='cod'
              type='natural'
              fill='var(--color-cod)'
              fillOpacity={0.4}
              stroke='var(--color-cod)'
              stackId='a'
            />
            <Area
              dataKey='stripe'
              type='natural'
              fill='var(--color-stripe)'
              fillOpacity={0.4}
              stroke='var(--color-stripe)'
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-start gap-2 text-sm'>
          <div className='grid gap-2'>
            <div className='flex items-center gap-2 font-medium leading-none'>
              Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
            </div>
            <div className='flex items-center gap-2 leading-none text-muted-foreground'>January - June 2024</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
