import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";



export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
  <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity md:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        onClick={() => setIsSidebarOpen(false)}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col transition-all duration-300 min-h-screen w-full">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="p-2 sm:p-4 md:p-6 flex-1 w-full max-w-full overflow-x-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
