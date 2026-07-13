export default function Header() {
  return (
    <header className="h-20 bg-white shadow flex items-center justify-between px-8">
      <div>
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Welcome back!
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-600" />

        <span className="font-medium">
          Admin
        </span>
      </div>
    </header>
  );
}