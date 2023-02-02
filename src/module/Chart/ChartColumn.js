import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const data = [
  {
    name: "Tháng 1",
    values: 4000,
  },
  {
    name: "Tháng 2",
    values: 3000,
  },
  {
    name: "Tháng 3",
    values: 2000,
  },
  {
    name: "Tháng 4",
    values: 2780,
  },
  {
    name: "Tháng 5",
    values: 1890,
  },
  {
    name: "Tháng 6",
    values: 2390,
  },
  {
    name: "Tháng 7",
    values: 3490,
  },
  {
    name: "Tháng 8",
    values: 490,
  },
  {
    name: "Tháng 9",
    values: 1123,
  },
  {
    name: "Tháng 10",
    values: 3100,
  },
  {
    name: "Tháng 11",
    values: 9012,
  },
  {
    name: "Tháng 12",
    values: 1092,
  },
];

const ChartColumn = () => {
  return (
    <div>
      <BarChart
        width={1000}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="values" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ChartColumn;
