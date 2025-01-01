class Solution(object):
    def findClosestNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        closest = nums[0]
        for num in nums:
            # checks if abs(num) is lessthan abs(closest) or if the abs() of two nums is equal takes the largest number
            if(abs(num) < abs(closest) or abs(num) == abs(closest) and num > closest):
                closest = num
        return closest

