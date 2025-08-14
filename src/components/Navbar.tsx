

import { Menu, Search, Bell, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
  <header className="flex items-center justify-between px-2 sm:px-4 md:px-8 py-3 sm:py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-30 w-full">
  <div className="flex items-center gap-2 sm:gap-4">
        {/* Hamburger only on mobile */}
        <button className="md:hidden text-gray-700 dark:text-gray-200 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition" onClick={onMenuClick}>
          <Menu size={24} />
        </button>

  <span className="text-lg sm:text-xl font-bold tracking-tight hidden md:inline-block">AI Dashboard</span>

  <div className="hidden xs:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-2 sm:px-3 py-1 rounded-full ml-2 sm:ml-4 w-28 sm:w-auto">
          <Search size={16} />
          <input
            className="bg-transparent outline-none text-xs sm:text-sm text-gray-700 dark:text-gray-200 placeholder-gray-500 w-full"
            placeholder="Search..."
          />
        </div>
      </div>

  <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggle />
  <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          <Bell size={20} />
        </button>
  <button className="p-1 rounded-full border-2 border-indigo-500">
          <User size={22} />
        </button>
      </div>
    </header>
  );
}
