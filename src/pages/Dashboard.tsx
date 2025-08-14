
import StatCard from "../components/StatCard";
import { SalesLineChart, SalesBarChart } from "../components/Charts";
import { Activity, Users, DollarSign, Package } from "lucide-react";
export default function Dashboard() {
  return (
    <div className="space-y-4 sm:space-y-6 w-full">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 w-full">
        <StatCard title="Sales" value="$28,420" delta="+6.2%" icon={<DollarSign />} />
        <StatCard title="Users" value="12,430" delta="+2.1%" icon={<Users />} />
        <StatCard title="Orders" value="1,214" delta="+3.5%" icon={<Package />} />
        <StatCard title="Activity" value="5,900" delta="+1.8%" icon={<Activity />} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 w-full">
        <SalesLineChart />
        <SalesBarChart />
      </div>
    </div>
  );
}
