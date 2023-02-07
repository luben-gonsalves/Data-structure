function curry(func, arity = func.length) {
  return function curried(...args) {
    if (func.length >= arity) return func(...args);
    return function (...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}
