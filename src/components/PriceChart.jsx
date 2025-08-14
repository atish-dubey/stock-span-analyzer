import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function PriceChart({ prices }) {
  const data = prices.map((price, index) => ({
    day: index + 1,
    price,
  }));

  return (
    <section aria-labelledby="price-chart-title">
      <h2 id="price-chart-title" className="text-lg font-semibold mb-2">
        Price Trend
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip
            labelFormatter={(label) => `Day ${label}`}
            formatter={(value) => [`$${value.toFixed(2)}`, 'Price']}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}