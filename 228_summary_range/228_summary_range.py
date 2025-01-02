class Solution(object):
    def summaryRanges(self, nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        if not nums:
            return []

        output = []
        l = 0

        for r in range(1, len(nums) + 1):
            # Check if r is out of bounds or nums[r] is not consecutive with nums[r-1]
            if r == len(nums) or nums[r] != nums[r - 1] + 1:
                if l == r - 1:
                    # Single number range
                    output.append("{}".format(nums[l]))
                else:
                    # Multiple number range
                    output.append("{}->{}".format(nums[l], nums[r - 1]))
                l = r 

        return output
