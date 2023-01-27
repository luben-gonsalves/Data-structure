function longestPalindrome(s) {
  let ans = 0;
  let map = new Map();

  for (let character of s) {
    map.set(character, map.get(character) + 1 || 1);
    ans += map.get(character) % 2 === 0 ? 2 : 0;
  }

  return s.length > ans ? ans + 1 : ans;
}

console.log(longestPalindrome("abccccdd"));
