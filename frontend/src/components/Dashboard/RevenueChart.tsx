import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

  datasets: [
    {
      label: "Revenue",

      data: [4200, 5100, 6000, 7400, 8200, 9500],

      borderColor: "#2563eb",

      backgroundColor: "#93c5fd",

      tension: 0.4,
    },
  ],
};

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">
        Monthly Revenue
      </h2>

      <Line data={data} />
    </div>
  );
}