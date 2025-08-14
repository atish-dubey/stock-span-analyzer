import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchStockPrices } from '../services/stockservice';

export default function ApiFetcher({ setPrices }) {
  const [symbol, setSymbol] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    if (!symbol.trim()) return toast.error('Symbol cannot be empty');
    setLoading(true);
    try {
      const data = await fetchStockPrices(symbol.trim().toUpperCase());
      setPrices(data);
      toast.success(`Loaded ${data.length} days for ${symbol.toUpperCase()}`);
    } catch (err) {
      toast.error(err.message || 'Failed to fetch prices');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section aria-labelledby="api-title">
      <Toaster position="top-center" />
      <h2 id="api-title" className="text-xl font-semibold mb-2">
        Real-Time API Mode
      </h2>
      <div className="flex items-end space-x-3">
        <label className="flex-1">
          <span className="block text-sm font-medium mb-1">
            Stock Symbol
          </span>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleFetch()}
            className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="e.g. AAPL"
          />
        </label>
        <button
          onClick={handleFetch}
          disabled={loading}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-300 transition"
        >
          {loading ? 'Loading…' : 'Fetch Data'}
        </button>
      </div>
    </section>
  );
}