class Solution:
    def productExceptSelf(self, nums):
        n = len(nums)
        ans = [1] * n
        suffix_prod = 1
        # prefix product
        for i in range(1, n):
            ans[i] = ans[i - 1] * nums[i - 1]
        # suffix product
        for i in range(n - 1, -1, -1):
            ans[i] *= suffix_prod
            suffix_prod *= nums[i]
        return ans