function isAnagram(s, t) {
  let map = new Map();
  for (let character of s) {
    let total = map.get(character);
    if (total) {
      map.set(character, total + 1);
    } else {
      map.set(character, 1);
    }
  }

  let total = 0;
  for (let character of t) {
    let val = map.get(character);
    if (!val) return false;
    else {
      map.set(character, val - 1);
      total += 1;
    }
  }
  return total === t.length;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
