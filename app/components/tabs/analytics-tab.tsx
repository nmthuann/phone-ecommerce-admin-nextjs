import { CategoryChart } from "./analytics/category-chart";
import { CustomerChart } from "./analytics/customer-chart";
import { MonthChart } from "./analytics/month-chart";
import { ProductChart } from "./analytics/product-chart";

const AnalyticsTab = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-center">
                <CustomerChart />
            </div>
            <div className="flex flex-wrap gap-4">
                <ProductChart />
                <MonthChart />
                <CategoryChart />
            </div>
        </div>
    );
};

export default AnalyticsTab;
