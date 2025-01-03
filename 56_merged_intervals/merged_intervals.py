class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: List[List[int]]
        [[1,3],[2,6],[8,10],[15,18]]
        [a,b], [c,d]
        if a < d and c < b: they overlap
        """
        intervals.sort(key=lambda x:x[0])
        merged_intervals = []
        for interval in intervals:
            if not merged_intervals or merged_intervals[-1][1] < interval[0]:
                merged_intervals.append(interval)
            else:
                merged_intervals[-1][1] = max(merged_intervals[-1][1], interval[1])
        return merged_intervals

