"use client";
import React, { useEffect, useState } from 'react'

import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

import {
  CardContent,
} from "@/components/ui/card";

const chartData = [
  {
    name: "Paid",
    value: 62.5,
    fill: "#FBBF24",
  },
];

const RadialChart = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <div className="w-full max-w-xs mx-auto">
      <CardContent className="flex justify-center items-center">
        <RadialBarChart
          width={200}
          height={200}
          innerRadius="80%"
          outerRadius="100%"
          barSize={15}
          data={chartData}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
          />
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <text
            x={100}
            y={100}
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-bold text-3xl"
          >
            62.5%
          </text>
          <text
            x={100}
            y={120}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-muted text-sm"
          >
            Paid
          </text>
        </RadialBarChart>
      </CardContent>
    </div>
  );
}

export default RadialChart