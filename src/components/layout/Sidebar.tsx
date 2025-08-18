export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 min-h-screen">
      <h3 className="text-xl font-bold mb-6">Dashboard</h3>
      <nav className="flex flex-col gap-2">
        <a href="/dashboard/company" className="hover:text-primary">
          Company
        </a>
        <a href="/dashboard/profile" className="hover:text-primary">
          Profile
        </a>
      </nav>
    </aside>
  );
}
