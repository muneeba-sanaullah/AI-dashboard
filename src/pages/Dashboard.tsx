import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

// --- Types ---
interface StatCardData {
  title: string;
  value: string;
  delta?: string;
  icon?: React.ReactNode;
}

interface ChartPoint {
  name: string;
  value: number;
}

interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
}

// --- Skeleton Components ---
const SkeletonBox = ({ className }: { className?: string }) => (
  <div className={`bg-gray-800 animate-pulse rounded ${className}`} />
);

export default function Dashboard() {
  const [stats, setStats] = useState<StatCardData[]>([]);
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const [activity, setActivity] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const productRes = await fetch("https://dummyjson.com/products?limit=100");
        if (!productRes.ok) throw new Error("Failed to fetch products");
        const { products } = await productRes.json();
        setProducts(products);

        const userRes = await fetch("https://dummyjson.com/users?limit=10");
        if (!userRes.ok) throw new Error("Failed to fetch users");
        const { users } = await userRes.json();

        // --- Stat Cards ---
        const revenue = products.reduce((sum: number, p: any) => sum + p.price, 0);
        const activeUsers = users.length;

        const statCards: StatCardData[] = [
          { title: "Total Revenue", value: `$${revenue.toLocaleString()}`, delta: "+12.3% from last month" },
          { title: "Active Users", value: activeUsers.toString(), delta: "+5.1% from last week" },
          { title: "Products", value: products.length.toString(), delta: "Updated live" },
        ];
        setStats(statCards);

        // --- Chart Data ---
        const grouped: Record<string, number[]> = {};
        products.forEach((p: any) => {
          if (!grouped[p.category]) grouped[p.category] = [];
          grouped[p.category].push(p.price);
        });
        const chart = Object.keys(grouped).map((cat) => ({
          name: cat,
          value: grouped[cat].reduce((a, b) => a + b, 0) / grouped[cat].length,
        }));
        setChartData(chart);

        // --- Recent Activity ---
        const sampleActions = [
          "added a product to cart",
          "updated profile",
          "checked out",
          "wrote a review",
          "joined a new plan",
        ];
        const activityFeed: Activity[] = users.map((u: any, idx: number) => ({
          id: u.id,
          user: `${u.firstName} ${u.lastName}`,
          action: sampleActions[idx % sampleActions.length],
          time: `${Math.floor(Math.random() * 24)}h ago`,
        }));
        setActivity(activityFeed.slice(0, 6));
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-4 space-y-6 bg-gray-950 min-h-screen">
      {/* Error message */}
      {error && (
        <div className="bg-red-900 text-red-200 p-4 rounded-lg">
          <p className="font-medium">⚠️ {error}</p>
        </div>
      )}

      {loading && !error && (
        <>
          {/* Skeleton Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 animate-pulse"
              >
                <SkeletonBox className="h-4 w-1/3" />
                <SkeletonBox className="h-6 w-1/2" />
                <SkeletonBox className="h-3 w-1/4" />
              </div>
            ))}
          </div>

          {/* Skeleton Chart */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-full animate-pulse">
            <SkeletonBox className="h-6 w-1/4 mb-4" />
            <SkeletonBox className="h-[300px] w-full" />
          </div>

          {/* Skeleton Recent Activity */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg animate-pulse">
            <SkeletonBox className="h-6 w-1/4 mb-4" />
            {[1, 2, 3, 4].map((i) => (
              <SkeletonBox key={i} className="h-4 w-full mb-2" />
            ))}
          </div>

          {/* Skeleton Top Products Table */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg animate-pulse">
            <SkeletonBox className="h-6 w-1/4 mb-4" />
            {[1, 2, 3, 4, 5].map((i) => (
              <SkeletonBox key={i} className="h-4 w-full mb-2" />
            ))}
          </div>
        </>
      )}

      {!loading && !error && (
        <>
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((card, i) => (
              <StatCard key={i} {...card} />
            ))}
          </div>

          {/* Chart */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-full">
            <h2 className="text-lg font-semibold mb-4 text-gray-100">Average Price by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 12, fill: "#9ca3af" }} tickFormatter={(val) => `$${val.toFixed(0)}`} />
                <Tooltip
                  formatter={(value: number) => `$${value.toFixed(0)}`}
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "none",
                    borderRadius: "0.5rem",
                    color: "#f9fafb",
                  }}
                />
                <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-100">Recent Activity</h2>
            <ul className="divide-y divide-gray-800">
              {activity.map((act) => (
                <li
                  key={act.id}
                  className="py-2 sm:py-3 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-2"
                >
                  <div className="flex flex-wrap gap-1 text-sm sm:text-base">
                    <span className="font-medium truncate text-gray-200">{act.user}</span>
                    <span className="truncate text-gray-400">{act.action}</span>
                  </div>
                  <span className="text-xs text-gray-500">{act.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Products Table */}
          <div className="bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-100">Top Products</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left divide-y divide-gray-800">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-2 text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {products.slice(0, 6).map((p: any) => (
                    <tr key={p.id} className="hover:bg-gray-800 transition">
                      <td className="px-4 py-2 text-gray-200">{p.title}</td>
                      <td className="px-4 py-2 text-gray-400">{p.category}</td>
                      <td className="px-4 py-2 text-gray-200">${p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
