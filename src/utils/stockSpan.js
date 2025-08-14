/**
 * Stock Span Problem – O(n) stack-based algorithm
 * @param {number[]} prices
 * @returns {number[]} spans
 */
export function calculateStockSpan(prices) {
  const n = prices.length;
  const spans = new Array(n).fill(0);
  const stack = []; // stores indices

  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      prices[stack[stack.length - 1]] <= prices[i]
    ) {
      stack.pop();
    }
    spans[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }

  return spans;
}