import { useDashboard } from "../../hooks/usedashboard";

export default function Dashboard() {
  const { data, isLoading, error } = useDashboard();

  if (isLoading) {
    return <p>Loading dashboard...</p>;
  }

  if (error) {
    return <p>Failed to load dashboard.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <pre className="mt-6 rounded-lg bg-slate-900 p-4 text-white overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}