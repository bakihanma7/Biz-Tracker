import { Plus, UserPlus, FileText } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">
        Quick Actions
      </h2>

      <div className="space-y-4">
        <button className="w-full flex items-center gap-3 rounded-lg bg-blue-600 text-white px-4 py-3 hover:bg-blue-700">
          <Plus size={18} />
          New Service
        </button>

        <button className="w-full flex items-center gap-3 rounded-lg bg-green-600 text-white px-4 py-3 hover:bg-green-700">
          <UserPlus size={18} />
          Add Customer
        </button>

        <button className="w-full flex items-center gap-3 rounded-lg bg-orange-500 text-white px-4 py-3 hover:bg-orange-600">
          <FileText size={18} />
          Generate Report
        </button>
      </div>
    </div>
  );
}