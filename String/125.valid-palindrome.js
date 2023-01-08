// var isPalindrome = function (s) {
//   s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
//   for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
//     if (s.charAt(i) !== s.charAt(j)) return false;
//   }
//   return true;
// };

function isPalindrome(s) {
  let formattedString = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let left = 0;
  let right = formattedString.length - 1;
  while (left < right) {
    if (formattedString[left] !== formattedString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
