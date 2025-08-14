const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

/**
 * Fetch last 30 closing prices from Alpha Vantage
 * @param {string} symbol
 * @returns {Promise<number[]>}
 */
export async function fetchStockPrices(symbol) {
  if (!API_KEY) throw new Error('Alpha Vantage API key missing');

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const json = await res.json();
  if (json['Error Message']) throw new Error('Invalid symbol');
  if (json['Note'])
    throw new Error('Rate limit hit – try again in a minute');

  const raw = json['Time Series (Daily)'];
  const closes = Object.values(raw)
    .slice(0, 30)
    .map((d) => Number(d['4. close']))
    .reverse(); // oldest → newest

  if (!closes.length) throw new Error('No price data returned');
  return closes;
}