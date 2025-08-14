
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from "recharts";

const lineData = [
  { name: "Mon", users: 40, sales: 240 },
  { name: "Tue", users: 35, sales: 200 },
  { name: "Wed", users: 50, sales: 300 },
  { name: "Thu", users: 60, sales: 350 },
  { name: "Fri", users: 45, sales: 280 },
  { name: "Sat", users: 70, sales: 420 },
  { name: "Sun", users: 90, sales: 520 },
];

export function SalesLineChart() {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-2 sm:p-4 shadow-sm w-full">
      <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">Weekly Users</h3>
      <ResponsiveContainer width="100%" height={180} minWidth={0} minHeight={0}>
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SalesBarChart() {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-2 sm:p-4 shadow-sm w-full">
      <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">Sales vs Orders</h3>
      <ResponsiveContainer width="100%" height={180} minWidth={0} minHeight={0}>
        <BarChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#10b981" />
          <Bar dataKey="users" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
