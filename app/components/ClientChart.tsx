"use client";

import React from "react";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ClientChartProps {
  data: any[];
}

const COLORS = ["#2563eb", "#0891b2", "#f59e0b", "#64748b"];

export default function ClientChart({ data }: ClientChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RePieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="rgba(0,0,0,0)"
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "#0F2854",
            border: "none",
            borderRadius: "8px",
            color: "white",
          }}
          itemStyle={{ color: "white" }}
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          iconType="circle"
          wrapperStyle={{ color: "#cbd5e1", fontSize: "12px" }}
        />
      </RePieChart>
    </ResponsiveContainer>
  );
}
