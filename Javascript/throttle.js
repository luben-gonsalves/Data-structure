function throttle(fn, limit) {
  let flag = true;
  return function () {
    if (flag) {
      fn.apply(this, arguments);
      setTimeout(function () {
        flag = false;
      }, limit);
    }
  };
}
