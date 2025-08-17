// src/mockData.tsx
import { DollarSign, Users, Activity, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

export interface StatCardData {
  title: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
}

export const statCards: StatCardData[] = [
  {
    title: "Total Revenue",
    value: "$25,400",
    delta: "+12.3% from last month",
    icon: <DollarSign size={20} />,
  },
  {
    title: "Active Users",
    value: "8,142",
    delta: "+5.1% from last week",
    icon: <Users size={20} />,
  },
  {
    title: "System Uptime",
    value: "99.9%",
    delta: "Stable",
    icon: <Activity size={20} />,
  },
  {
    title: "Growth Rate",
    value: "23%",
    delta: "+2.4% YoY",
    icon: <TrendingUp size={20} />,
  },
];

export interface ChartData {
  name: string;
  value: number;
}

export const chartData: ChartData[] = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3200 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4200 },
  { name: "May", value: 5300 },
  { name: "Jun", value: 4800 },
];

export interface ActivityData {
  id: number;
  user: string;
  action: string;
  time: string;
}

export const recentActivity: ActivityData[] = [
  { id: 1, user: "John Doe", action: "uploaded a file", time: "2h ago" },
  { id: 2, user: "Jane Smith", action: "updated profile", time: "4h ago" },
  { id: 3, user: "Michael Lee", action: "added a new report", time: "1d ago" },
  { id: 4, user: "Sarah Brown", action: "commented on a task", time: "2d ago" },
];
