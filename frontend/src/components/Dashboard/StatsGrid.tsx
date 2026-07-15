import {
  DollarSign,
  Users,
  Wrench,
  Package,
} from "lucide-react";

import StatCard from "./StatCard";
import type { DashboardData } from "../../types/dashboard";

type Props = {
  data: DashboardData;
};

export default function StatsGrid({ data }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Revenue"
        value={`$${data.revenue.toLocaleString()}`}
        change="+12%"
        icon={DollarSign}
      />

      <StatCard
        title="Customers"
        value={data.customers.toString()}
        change="+8"
        icon={Users}
      />

      <StatCard
        title="Services"
        value={data.services.toString()}
        change="+5"
        icon={Wrench}
      />

      <StatCard
        title="Inventory"
        value={data.inventory.toString()}
        change="8 Low Stock"
        icon={Package}
      />
    </div>
  );
}