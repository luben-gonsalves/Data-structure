function curry(func) {
  return function curried(...args) {
    if (args.length === func.length) {
      return func.apply(this, args);
    }

    return function (...args2) {
      return curried.apply(this, [...args, ...args2]);
    };
  };
}

function addTwo(a, b) {
  return a + b;
}
const curriedAddTwo = curry(addTwo);
curriedAddTwo(3)(4); // 7
curriedAddTwo(3, 4); // 7
const alreadyAddedThree = curriedAddTwo(3);
alreadyAddedThree(4); // 7
