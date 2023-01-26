let counter = 0;
function getSearchResults(a, b) {
  console.log("searching..", counter++);
}

function debounce(fn, limiter) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, limiter);
  };
}

let customDebounce = debounce(getSearchResults, 300);
