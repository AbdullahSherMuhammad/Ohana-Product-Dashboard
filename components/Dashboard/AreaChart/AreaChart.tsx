"use client";

import React, { useEffect, useState } from "react";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import {
  CardContent,
} from "@/components/ui/card";

const chartData = [
  { month: "Jan", members: 800, visitors: 600, subscribers: 400 },
  { month: "Feb", members: 900, visitors: 700, subscribers: 500 },
  { month: "Mar", members: 950, visitors: 750, subscribers: 550 },
  { month: "Apr", members: 1000, visitors: 770, subscribers: 570 },
  { month: "May", members: 970, visitors: 750, subscribers: 550 },
  { month: "Jun", members: 980, visitors: 760, subscribers: 560 },
  { month: "Jul", members: 960, visitors: 740, subscribers: 540 },
  { month: "Aug", members: 940, visitors: 720, subscribers: 520 },
  { month: "Sep", members: 900, visitors: 680, subscribers: 480 },
  { month: "Oct", members: 870, visitors: 670, subscribers: 470 },
  { month: "Nov", members: 850, visitors: 660, subscribers: 460 },
  { month: "Dec", members: 820, visitors: 650, subscribers: 450 },
];

const StyledAreaChart = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFA500" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSubscribers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Chart content */}
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="subscribers"
              stackId="1"
              stroke="#3B82F6"
              fill="url(#colorSubscribers)"
            />
            <Area
              type="monotone"
              dataKey="visitors"
              stackId="1"
              stroke="#22C55E"
              fill="url(#colorVisitors)"
            />
            
            <Area
              type="monotone"
              dataKey="members"
              stackId="1"
              stroke="#FFA500"
              fill="url(#colorMembers)"
            />
          </AreaChart>
        </ResponsiveContainer>
    </>
  );
}

export default StyledAreaChart