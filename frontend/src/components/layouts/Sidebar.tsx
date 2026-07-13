import {
  LayoutDashboard,
  Users,
  Wrench,
  Package,
  FileBarChart,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Users, label: "Customers" },
  { icon: Wrench, label: "Services" },
  { icon: Package, label: "Inventory" },
  { icon: FileBarChart, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-10">
        Biz Tracker
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="flex items-center gap-3 w-full rounded-lg px-4 py-3 hover:bg-slate-800 transition"
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}