import { X, Home, BarChart2, FileText, Settings, User, Bell } from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { icon: <Home size={20} />, label: "Overview", to: "/dashboard" },
  { icon: <BarChart2 size={20} />, label: "Analytics", to: "/analytics" },
  { icon: <FileText size={20} />, label: "Reports", to: "/reports" },
  { icon: <User size={20} />, label: "Profile", to: "/profile" },
  { icon: <Bell size={20} />, label: "Notification", to: "/notification" },
  { icon: <Settings size={20} />, label: "Settings", to: "/settings" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`
        fixed z-50 inset-y-0 left-0 w-4/5 max-w-xs md:w-64
        bg-gray-800 text-gray-100
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:top-0 md:left-0 md:h-screen
        flex flex-col p-4 sm:p-6 shadow-lg border-r border-gray-700
      `}
      aria-label="Sidebar"
    >
      {/* Close button mobile */}
      <div className="flex items-center justify-between mb-6 sm:mb-8 md:hidden">
        <h2 className="text-2xl font-bold tracking-tight">AI Dashboard</h2>
        <button
          className="p-2 rounded hover:bg-gray-700 focus:outline-none"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X size={22} />
        </button>
      </div>

      <ul className="space-y-1 sm:space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg transition text-base sm:text-lg font-medium ${
                  isActive ? "bg-gray-800 text-indigo-400" : "hover:bg-gray-800"
                }`
              }
              onClick={onClose}
            >
              {link.icon} <span>{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 sm:pt-8 text-xs text-gray-400 text-center">
        &copy; {new Date().getFullYear()} AI Dashboard
      </div>
    </aside>
  );
}
