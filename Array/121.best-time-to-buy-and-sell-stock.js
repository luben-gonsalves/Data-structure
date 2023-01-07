function maxProfit(prices) {
  let maxProfit = 0;
  let minSoFar = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minSoFar) {
      minSoFar = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minSoFar);
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
