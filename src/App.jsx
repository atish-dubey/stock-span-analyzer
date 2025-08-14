import { useState } from 'react';
import Header from './components/Header';
import ModeToggle from './components/ModeToggle';
import ManualEntry from './components/ManualEntry';
import ApiFetcher from './components/ApiFetcher';
import ResultsTable from './components/ResultsTable';
import PriceChart from './components/PriceChart';
import SpanChart from './components/SpanChart';
import { calculateStockSpan } from './utils/stockSpan';

export default function App() {
  const [mode, setMode] = useState('manual'); // 'manual' | 'api'
  const [prices, setPrices] = useState([]);
  const [spans, setSpans] = useState([]);

  const updateData = (newPrices) => {
    setPrices(newPrices);
    setSpans(calculateStockSpan(newPrices));
  };

  const resetData = () => {
    setPrices([]);
    setSpans([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        <ModeToggle mode={mode} setMode={setMode} reset={resetData} />

        {mode === 'manual' ? (
          <ManualEntry prices={prices} setPrices={updateData} />
        ) : (
          <ApiFetcher setPrices={updateData} reset={resetData} />
        )}

        {prices.length > 0 && (
          <>
            <ResultsTable prices={prices} spans={spans} />
            <div className="grid md:grid-cols-2 gap-8">
              <PriceChart prices={prices} />
              <SpanChart spans={spans} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}