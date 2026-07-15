import StatsGrid from "../../components/Dashboard/StatsGrid";
import DashboardGrid from "../../components/Dashboard/DashboardGrid";
import { useDashboard } from "../../hooks/usedashboard";

export default function Dashboard() {
  const { data, isLoading, error } = useDashboard();

  if (isLoading) {
    return <p>Loading dashboard...</p>;
  }

  if (error || !data) {
    return <p>Failed to load dashboard.</p>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">
          Welcome back to Biz Tracker.
        </p>
      </div>

      <StatsGrid data={data} />

      <DashboardGrid data={data} />
    </div>
  );
}