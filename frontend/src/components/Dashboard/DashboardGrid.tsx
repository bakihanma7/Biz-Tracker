import RevenueChart from "./RevenueChart";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";

import type { DashboardData } from "../../types/dashboard";

type Props = {
  data: DashboardData;
};

export default function DashboardGrid({
  data,
}: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <RevenueChart chartData={data.chart} />

        <RecentActivity
          activities={data.recentActivity}
        />
      </div>

      <QuickActions />
    </div>
  );
}