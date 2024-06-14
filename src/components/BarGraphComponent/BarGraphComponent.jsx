import "./BarGraphComponent.css";
import { XAxis, YAxis, BarChart, Bar } from "recharts";

const data = [
  {
    name: "Entertainment",

    amt: 2400,
  },
  {
    name: "Food",

    amt: 2210,
  },
  {
    name: "Travel",

    amt: 2290,
  },
];

export default function BarGraphComponent() {
  return (
    <div className="barGraph">
      <BarChart
        maxBarSize={20}
        width={450}
        height={375}
        data={data}
        layout="vertical"
      >
        <XAxis type="number" axisLine={false} tick={false} />
        <YAxis width={100} dataKey="name" axisLine={false} type="category" />
        <Bar dataKey="amt" fill="#8784D2" />
      </BarChart>
    </div>
  );
}
