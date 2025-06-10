"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "./overviews/overview";
import { RecentSales } from "./overviews/recent-sales";
import StatisticsCards from "./overviews/statistics-cards";
import { MonthlyRevenue } from "@/actions/get-monthly-revenue";
import { FC } from "react";
import { TotalRevenue } from "@/actions/get-total-revenue";
import { TotalOrder } from "@/actions/get-total-order";
import { RecentSale } from "@/actions/get-recent-sales";
interface OverviewTabProps {
  data: MonthlyRevenue[];
  recentSales: RecentSale[];
  totalRevenue: TotalRevenue;
  totalOrder: TotalOrder;
}

// const dataTest = [
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

const OverviewTab: FC<OverviewTabProps> = ({
  data,
  recentSales,
  totalRevenue,
  totalOrder,
}) => {
  // console.log(data)
  return (
    <div>
      <StatisticsCards totalRevenue={totalRevenue} totalOrder={totalOrder} />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 ">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={data} />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>{`You made ${recentSales.length} sales this month.`}</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales recentSales={recentSales} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
