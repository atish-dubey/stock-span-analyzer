import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ManualEntry({ prices, setPrices }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const val = Number(input.trim());
    if (!input.trim()) return toast.error('Price cannot be empty');
    if (isNaN(val) || val <= 0)
      return toast.error('Please enter a positive number');
    setPrices([...prices, val]);
    setInput('');
  };

  return (
    <section aria-labelledby="manual-title">
      <Toaster position="top-center" />
      <h2 id="manual-title" className="text-xl font-semibold mb-2">
        Manual Entry Mode
      </h2>
      <div className="flex items-end space-x-3">
        <label className="flex-1">
          <span className="block text-sm font-medium mb-1">
            Enter Stock Price
          </span>
          <input
            type="number"
            step="any"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            className="w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="e.g. 145.30"
          />
        </label>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Add Price
        </button>
      </div>
    </section>
  );
}