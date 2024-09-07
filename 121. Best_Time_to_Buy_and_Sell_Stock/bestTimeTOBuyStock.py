class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        maxProfit = 0
        buy = 0, sell = 1
        7   1   5   3   6   4
        """
        min_price = float('inf')
        max_profit = 0
        for price in prices:
            min_price = min(price, min_price)
            current_profit = price - min_price
            max_profit = max(max_profit, current_profit)
        return max_profit
    


