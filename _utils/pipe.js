function pipe(...fn) {
  return function (...args) {
    return fn.reduce((result, func) => [func(...result)], args)[0];
  };
}
//
// [func(...result)] --> the result should be an array to spread as arguments to next function

// Define the functions that add to the string
function addPrefix(str) {
  return "prefix-" + str;
}

function addSuffix(str) {
  return str + "-suffix";
}

function toUppercase(str) {
  return str.toUpperCase();
}

// Create a piped function that applies the three functions in the correct order
const decorated1 = pipe(addPrefix, addSuffix, toUppercase);
const decorated2 = pipe(toUppercase, addPrefix, addSuffix);

// Call the piped function with the input string
const result1 = decorated1("hello"); // PREFIX-HELLO-SUFFIX
const result2 = decorated2("hello"); // prefix-HELLO-suffix

console.log(result1);
