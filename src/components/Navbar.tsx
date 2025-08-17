import { Menu, Search, Bell, User } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700 shadow-sm sticky top-0 z-30 w-full">
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Hamburger mobile */}
        <button
          className="md:hidden text-gray-100 p-2 rounded hover:bg-gray-700 transition"
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>

        <span className="text-lg sm:text-xl font-bold tracking-tight hidden md:inline-block">
          AI Dashboard
        </span>

        <div className="hidden xs:flex items-center gap-2 bg-gray-700 px-2 sm:px-3 py-1 rounded-full ml-2 sm:ml-4 w-28 sm:w-auto">
          <Search size={16} className="text-gray-200" />
          <input
            className="bg-transparent outline-none text-xs sm:text-sm text-gray-100 placeholder-gray-400 w-full"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="p-2 rounded hover:bg-gray-700 transition">
          <Bell size={20} className="text-gray-100" />
        </button>
        <button className="p-1 rounded-full border-2 border-indigo-500">
          <User size={22} className="text-gray-100" />
        </button>
      </div>
    </header>
  );
}
