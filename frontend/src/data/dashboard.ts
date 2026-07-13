import {
  DollarSign,
  Users,
  Wrench,
  Package,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Revenue",
    value: "$18,540",
    change: "+12% this month",
    icon: DollarSign,
  },
  {
    title: "Customers",
    value: "312",
    change: "+8 new today",
    icon: Users,
  },
  {
    title: "Services",
    value: "97",
    change: "+5 completed",
    icon: Wrench,
  },
  {
    title: "Inventory",
    value: "146",
    change: "Low stock: 8",
    icon: Package,
  },
];