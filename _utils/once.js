function once(func) {
  let ran = false;
  let result;
  return function (...args) {
    if (ran) return result;
    result = func.apply(this, args);
    ran = true;
    return result;
  };
}
