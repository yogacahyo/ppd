"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ProjectChartProps {
  data: any[];
}

export default function ProjectChart({ data }: ProjectChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#ffffff20"
          vertical={false}
        />
        <XAxis
          dataKey="year"
          stroke="#94a3b8"
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#94a3b8"
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#0F2854",
            border: "none",
            borderRadius: "8px",
            color: "white",
          }}
          itemStyle={{ color: "white" }}
          cursor={{ fill: "#ffffff10" }}
        />
        <Bar dataKey="projects" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
