import { useState } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <img
        src="https://i.pravatar.cc/40" 
        alt="User avatar"
        className="w-8 h-8 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-800 rounded-lg shadow-lg">
          <ul className="py-2 text-sm text-gray-200">
            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-red-400">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}
