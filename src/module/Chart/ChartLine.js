import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Tháng 1",
    min: 1,
    max: 10,
  },
  {
    name: "Tháng 2",
    min: 2,
    max: 13,
  },
  {
    name: "Tháng 3",
    min: 3,
    max: 15,
  },
  {
    name: "Tháng 4",
    min: 4,
    max: 18,
  },
  {
    name: "Tháng 5",
    min: 5,
    max: 25,
  },
  {
    name: "Tháng 6",
    min: 6,
    max: 34,
  },
  {
    name: "Tháng 7",
    min: 7,
    max: 19,
  },
];

const ChartLine = () => {
  return (
    <div>
      <LineChart
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
        <Line
          type="monotone"
          dataKey="max"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="min" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default ChartLine;
