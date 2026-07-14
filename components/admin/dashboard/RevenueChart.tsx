"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Sty", revenue: 4200 },
  { month: "Lut", revenue: 5100 },
  { month: "Mar", revenue: 6800 },
  { month: "Kwi", revenue: 7200 },
  { month: "Maj", revenue: 9100 },
  { month: "Cze", revenue: 10800 },
  { month: "Lip", revenue: 12540 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        Przychód miesięczny
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#27272a" />

            <XAxis
              dataKey="month"
              stroke="#71717a"
            />

            <YAxis
              stroke="#71717a"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#06b6d4"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}