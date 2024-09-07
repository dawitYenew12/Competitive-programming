class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """
        merged = []
        min_len = min(len(word1), len(word2))

        for i in range(min_len):
            merged.append(word1[i])
            merged.append(word2[i])
        merged.append(word1[min_len:] if len(word1) > min_len else word2[min_len:])
        return ''.join(merged)



