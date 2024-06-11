import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./StatChart.css";
const COLORS = ["#FF9304", "#A000FF", "#FDE006", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function StatChart() {
  const data = [
    { name: "Entertainment", value: 70 },
    { name: "Travel", value: 20 },
    { name: "Food", value: 10 },
  ];
  return (
    <div className="chartContainer">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="chartDesc">
          Entertainment
          <div
            style={{
              margin: "4px",
              display: "inline-block",
              width: "26px",
              height: "8px",
              backgroundColor: COLORS[0],
            }}
          ></div>
          Travel
          <div
            style={{
              margin: "4px",
              display: "inline-block",
              width: "26px",
              height: "8px",
              backgroundColor: COLORS[1],
            }}
          ></div>
          Food
          <div
            style={{
              margin: "4px",
              display: "inline-block",
              width: "26px",
              height: "8px",
              backgroundColor: COLORS[2],
            }}
          ></div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
