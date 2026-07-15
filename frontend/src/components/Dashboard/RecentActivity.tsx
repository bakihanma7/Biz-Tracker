type Props = {
  activities: string[];
};

export default function RecentActivity({
  activities,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">
        Recent Activity
      </h2>

      <ul className="space-y-3">
        {activities.map((activity) => (
          <li
            key={activity}
            className="border-b border-gray-200 pb-2"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}