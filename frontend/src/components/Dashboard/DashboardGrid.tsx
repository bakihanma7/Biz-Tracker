import RevenueChart from "./RevenueChart";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";

export default function DashboardGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <RevenueChart />
        <RecentActivity />
      </div>

      <QuickActions />
    </div>
  );
}