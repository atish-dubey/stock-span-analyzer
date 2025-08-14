
# 📈 Stock Span Analyzer

A **production-grade React + Vite** web application that brings the classic **Stock Span Problem** from Data Structures & Algorithms into a beautiful, real-world financial dashboard.

> **Live Demo:**  
> [https://stock-span-analyzer.vercel.app](https://stock-span-analyzer.vercel.app)

---

---

## 🚀 Features

| Feature | Description |
| --- | --- |
| ⚡ **Fast Algorithm** | O(n) stack-based stock-span implementation |
| ✋ **Manual Entry** | Add individual prices via input |
| 🌐 **Real-Time API** | Fetch 30-day closing prices from [Alpha Vantage](https://www.alphavantage.co) |
| 📊 **Interactive Charts** | Price line-chart & span bar-chart powered by Recharts |
| 🎨 **Responsive UI** | Tailwind CSS – mobile-first & accessible |
| 🌍 **PWA Ready** | Easily extendable to a Progressive Web App |
| 🧪 **Error Handling** | Graceful fallbacks & toast notifications |
| 🧹 **Reset** | One-click clear for all data |

---

## 🧰 Tech Stack

- **Frontend:** React 18 with Vite  
- **Styling:** Tailwind CSS  
- **Charts:** Recharts  
- **Notifications:** React-Hot-Toast  
- **API:** Alpha Vantage REST API  

---

## 📦 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/atish-dubey/stock-span-analyzer.git
cd stock-span-analyzer
npm install
```

### 2. Environment Variables
Create a `.env` file at project root:

```bash
cp .env.example .env
```

Add your **Alpha Vantage API key** (get one free [here](https://www.alphavantage.co/support/#api-key)):

```
VITE_ALPHA_VANTAGE_KEY=YOUR_ALPHA_VANTAGE_KEY_HERE
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173).

---



---

## 📂 Project Structure
```
stock-span-analyzer/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ ApiFetcher.jsx
│  │  ├─ Header.jsx
│  │  ├─ ManualEntry.jsx
│  │  ├─ ModeToggle.jsx
│  │  ├─ PriceChart.jsx
│  │  ├─ ResultsTable.jsx
│  │  └─ SpanChart.jsx
│  ├─ services/
│  │  └─ stockService.js
│  ├─ utils/
│  │  └─ stockSpan.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ .env.example
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ README.md
```

---

## 🧪 Algorithm Deep-Dive

The **Stock Span Problem** is solved in `src/utils/stockSpan.js` using a **monotonic stack**:

```js
export function calculateStockSpan(prices) {
  const n = prices.length;
  const spans = Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && prices[stack.at(-1)] <= prices[i]) {
      stack.pop();
    }
    spans[i] = stack.length ? i - stack.at(-1) : i + 1;
    stack.push(i);
  }
  return spans;
}
```

**Complexity:**  
- Time: **O(n)**  
- Space: **O(n)**

---

## 🧩 API Reference

| Endpoint | Description |
| --- | --- |
| `/query?function=TIME_SERIES_DAILY&symbol={SYMBOL}&apikey={KEY}` | Alpha Vantage daily prices |
| Returns | JSON object with 30 most recent closing prices |

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
---


