function isValid(s) {
  if (s.length === 0) return false;

  let stack = [];
  let hashMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
      continue;
    }
    if (stack.at(-1) === hashMap[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
