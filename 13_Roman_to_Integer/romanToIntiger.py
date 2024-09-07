class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        lable = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        number = 0
        prev_value = 0
        for char in s:
            curr_value = lable[char]
            if curr_value > prev_value:
                number += curr_value - 2 * prev_value
            else:
                number += curr_value
            prev_value = curr_value
        return number