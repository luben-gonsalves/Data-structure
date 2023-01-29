function once(func) {
  let ranOnce = false;
  let value;
  return function () {
    console.log(...arguments, "args");
    if (!ranOnce) {
      value = func.apply(this, arguments);
    }
    return value;
  };
}

let i = 3;
function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
console.log(incrementByOnce(2, 3, 4));
