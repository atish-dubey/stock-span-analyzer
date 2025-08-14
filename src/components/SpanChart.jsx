import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function SpanChart({ spans }) {
  const data = spans.map((span, index) => ({
    day: index + 1,
    span,
  }));

  return (
    <section aria-labelledby="span-chart-title">
      <h2 id="span-chart-title" className="text-lg font-semibold mb-2">
        Span Values
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip
            labelFormatter={(label) => `Day ${label}`}
            formatter={(value) => [value, 'Span']}
          />
          <Bar dataKey="span" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}