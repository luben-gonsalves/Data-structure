function curry(func) {
  return function curried(...args) {
    if (args.length < func.length) {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
    return func.apply(this, args);
  };
}

function addTwo(a, b) {
  return a + b;
}

const curriedAddTwo = curry(addTwo);
console.log(curriedAddTwo(3)(4)); // 7
