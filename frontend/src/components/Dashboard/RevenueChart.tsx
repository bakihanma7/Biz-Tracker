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

type Props = {
  chartData: number[];
};

export default function RevenueChart({ chartData }: Props) {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        label: "Revenue",

        data: chartData,

        borderColor: "#2563eb",

        backgroundColor: "#93c5fd",

        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">
        Monthly Revenue
      </h2>

      <Line data={data} />
    </div>
  );
}