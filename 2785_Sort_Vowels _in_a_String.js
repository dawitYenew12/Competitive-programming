function sortVowels(s) {
  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
  let extracted = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      extracted.push(s[i]);
    }
  }

  extracted.sort();

  let result = [];
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      result.push(extracted[j]);
      j++;
    } else {
      result.push(s[i]);
    }
  }

  return result.join('');
}
