"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive line chart";

const chartData = [
  { date: "2025-03-01", cod: 222, stripe: 150 },
  { date: "2025-03-02", cod: 97, stripe: 180 },
  { date: "2025-03-03", cod: 167, stripe: 120 },
  { date: "2025-03-04", cod: 242, stripe: 260 },
  { date: "2025-03-05", cod: 373, stripe: 290 },
  { date: "2025-03-05", cod: 301, stripe: 340 },
  { date: "2025-03-07", cod: 245, stripe: 180 },
  { date: "2025-03-08", cod: 409, stripe: 320 },
  { date: "2025-03-09", cod: 59, stripe: 110 },
  { date: "2025-03-10", cod: 261, stripe: 190 },
  { date: "2025-03-11", cod: 327, stripe: 350 },
  { date: "2025-03-12", cod: 292, stripe: 210 },
  { date: "2025-03-13", cod: 342, stripe: 380 },
  { date: "2025-03-14", cod: 137, stripe: 220 },
  { date: "2025-03-15", cod: 120, stripe: 170 },
  { date: "2025-03-16", cod: 138, stripe: 190 },
  { date: "2025-03-17", cod: 446, stripe: 360 },
  { date: "2025-03-18", cod: 364, stripe: 410 },
  { date: "2025-03-19", cod: 243, stripe: 180 },
  { date: "2025-03-20", cod: 89, stripe: 150 },
  { date: "2025-03-21", cod: 137, stripe: 200 },
  { date: "2025-03-22", cod: 224, stripe: 170 },
  { date: "2025-03-23", cod: 138, stripe: 230 },
  { date: "2025-03-24", cod: 387, stripe: 290 },
  { date: "2025-03-25", cod: 215, stripe: 250 },
  { date: "2025-03-26", cod: 75, stripe: 130 },
  { date: "2025-03-27", cod: 383, stripe: 420 },
  { date: "2025-03-28", cod: 122, stripe: 180 },
  { date: "2025-03-29", cod: 315, stripe: 240 },
  { date: "2025-03-30", cod: 454, stripe: 380 },
  { date: "2025-04-01", cod: 165, stripe: 220 },
  { date: "2025-04-02", cod: 293, stripe: 310 },
  { date: "2025-04-03", cod: 247, stripe: 190 },
  { date: "2025-04-04", cod: 385, stripe: 420 },
  { date: "2025-04-05", cod: 481, stripe: 390 },
  { date: "2025-04-05", cod: 498, stripe: 520 },
  { date: "2025-04-07", cod: 388, stripe: 300 },
  { date: "2025-04-08", cod: 149, stripe: 210 },
  { date: "2025-04-09", cod: 227, stripe: 180 },
  { date: "2025-04-10", cod: 293, stripe: 330 },
  { date: "2025-04-11", cod: 335, stripe: 270 },
  { date: "2025-04-12", cod: 197, stripe: 240 },
  { date: "2025-04-13", cod: 197, stripe: 160 },
  { date: "2025-04-14", cod: 448, stripe: 490 },
  { date: "2025-04-15", cod: 473, stripe: 380 },
  { date: "2025-04-16", cod: 338, stripe: 400 },
  { date: "2025-04-17", cod: 499, stripe: 420 },
  { date: "2025-04-18", cod: 315, stripe: 350 },
  { date: "2025-04-19", cod: 235, stripe: 180 },
  { date: "2025-04-20", cod: 177, stripe: 230 },
  { date: "2025-04-21", cod: 82, stripe: 140 },
  { date: "2025-04-22", cod: 81, stripe: 120 },
  { date: "2025-04-23", cod: 252, stripe: 290 },
  { date: "2025-04-24", cod: 294, stripe: 220 },
  { date: "2025-04-25", cod: 201, stripe: 250 },
  { date: "2025-04-26", cod: 213, stripe: 170 },
  { date: "2025-04-27", cod: 420, stripe: 460 },
  { date: "2025-04-28", cod: 233, stripe: 190 },
  { date: "2025-04-29", cod: 78, stripe: 130 },
  { date: "2025-04-30", cod: 340, stripe: 280 },
  { date: "2025-04-31", cod: 178, stripe: 230 },
  { date: "2025-05-01", cod: 178, stripe: 200 },
  { date: "2025-05-02", cod: 470, stripe: 410 },
  { date: "2025-05-03", cod: 103, stripe: 160 },
  { date: "2025-05-04", cod: 439, stripe: 380 },
  { date: "2025-05-05", cod: 88, stripe: 140 },
  { date: "2025-05-06", cod: 294, stripe: 250 },
  { date: "2025-05-07", cod: 323, stripe: 370 },
  { date: "2025-05-08", cod: 385, stripe: 320 },
  { date: "2025-05-09", cod: 438, stripe: 480 },
  { date: "2025-05-10", cod: 155, stripe: 200 },
  { date: "2025-05-11", cod: 92, stripe: 150 },
  { date: "2025-05-12", cod: 492, stripe: 420 },
  { date: "2025-05-13", cod: 81, stripe: 130 },
  { date: "2025-05-14", cod: 426, stripe: 380 },
  { date: "2025-05-15", cod: 307, stripe: 350 },
  { date: "2025-05-16", cod: 371, stripe: 310 },
  { date: "2025-05-17", cod: 475, stripe: 520 },
  { date: "2025-05-18", cod: 107, stripe: 170 },
  { date: "2025-05-19", cod: 341, stripe: 290 },
  { date: "2025-05-20", cod: 408, stripe: 450 },
  { date: "2025-05-21", cod: 169, stripe: 210 },
  { date: "2025-05-22", cod: 317, stripe: 270 },
  { date: "2025-05-23", cod: 480, stripe: 530 },
  { date: "2025-05-24", cod: 132, stripe: 180 },
  { date: "2025-05-25", cod: 141, stripe: 190 },
  { date: "2025-05-26", cod: 434, stripe: 380 },
  { date: "2025-05-27", cod: 448, stripe: 490 },
  { date: "2025-05-28", cod: 149, stripe: 200 },
  { date: "2025-05-29", cod: 103, stripe: 160 },
  { date: "2025-05-30", cod: 446, stripe: 400 },
];

const chartConfig = {
  views: {
    label: "Page Views",
  },
  cod: {
    label: "COD",
    color: "hsl(var(--chart-1))",
  },
  stripe: {
    label: "STRIPE",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function CustomerChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("cod");

  const total = React.useMemo(
    () => ({
      cod: chartData.reduce((acc, curr) => acc + curr.cod, 0),
      stripe: chartData.reduce((acc, curr) => acc + curr.stripe, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row ">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>
            Line Chart - The correlation between two types of orders
          </CardTitle>
          <CardDescription>
            The correlation between the number of orders paid via COD and
            Stripe.
          </CardDescription>
        </div>
        <div className="flex">
          {["cod", "stripe"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}>
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
