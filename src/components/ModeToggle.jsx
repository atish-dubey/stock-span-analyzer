export default function ModeToggle({ mode, setMode, reset }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center space-x-4">
        <span className="text-lg font-medium">Mode:</span>
        <button
          onClick={() => {
            reset();
            setMode('manual');
          }}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            mode === 'manual'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Manual Entry
        </button>
        <button
          onClick={() => {
            reset();
            setMode('api');
          }}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            mode === 'api'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Real-Time API
        </button>
      </div>
    </div>
  );
}