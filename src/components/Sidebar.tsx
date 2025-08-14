

import { Home, BarChart2, User, Settings, X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { icon: <Home size={20} />, label: "Dashboard" },
  { icon: <BarChart2 size={20} />, label: "Analytics" },
  { icon: <User size={20} />, label: "Profile" },
  { icon: <Settings size={20} />, label: "Settings" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`
        fixed z-50 inset-y-0 left-0 w-4/5 max-w-xs md:w-64 bg-gray-900 text-white transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:inset-0 md:block md:transform-none
        min-h-screen flex flex-col p-4 sm:p-6 shadow-2xl border-r border-gray-800
      `}
      style={{ background: "#18181b" }}
      aria-label="Sidebar"
    >
      {/* Close button for mobile */}
  <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-2xl font-bold tracking-tight">AI Dashboard</h2>
        <button
          className="md:hidden p-2 rounded hover:bg-gray-800 focus:outline-none"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X size={22} />
        </button>
      </div>
  <ul className="space-y-1 sm:space-y-2">
        {links.map((link) => (
          <li
            key={link.label}
            className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer text-base sm:text-lg font-medium"
          >
            {link.icon} <span>{link.label}</span>
          </li>
        ))}
      </ul>
  <div className="mt-auto pt-4 sm:pt-8 text-xs text-gray-400 text-center">
        &copy; {new Date().getFullYear()} AI Dashboard
      </div>
    </aside>
  );
}
