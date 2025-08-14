import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  delta?: string;
  icon?: React.ReactNode;
}

export default function StatCard({ title, value, delta, icon }: StatCardProps) {
  return (
  <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-3 sm:p-4 shadow-sm w-full">
  <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">{title}</p>
          <p className="text-xl sm:text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="text-indigo-600 dark:text-indigo-400">{icon}</div>
      </div>
  {delta && <p className="text-xs sm:text-sm text-green-500 mt-2">{delta}</p>}
    </div>
  );
}
