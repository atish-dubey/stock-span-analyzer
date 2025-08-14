export default function ResultsTable({ prices, spans }) {
  return (
    <section aria-labelledby="results-title">
      <h2 id="results-title" className="text-xl font-semibold mb-2">
        Results
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 rounded-md">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">Day</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Price ($)
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold">
                Span
              </th>
            </tr>
          </thead>
          <tbody>
            {prices.map((p, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2 text-sm">{idx + 1}</td>
                <td className="px-4 py-2 text-sm">{p.toFixed(2)}</td>
                <td className="px-4 py-2 text-sm font-medium">{spans[idx]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}