import { useState } from "react";
import { Bell } from "lucide-react";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const notifications = [
    "New order received",
    "User John updated profile",
    "System maintenance tomorrow",
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full hover:bg-gray-800 transition"
      >
        <Bell className="w-5 h-5 text-gray-300" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-gray-900 border border-gray-800 rounded-lg shadow-lg p-3">
          <h3 className="text-sm font-semibold text-gray-200 mb-2">
            Notifications
          </h3>
          <ul className="space-y-1">
            {notifications.map((n, i) => (
              <li key={i} className="text-sm text-gray-300 p-2 rounded hover:bg-gray-800">
                {n}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
