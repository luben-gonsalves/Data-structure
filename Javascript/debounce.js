let counter = 0;
function getSearchResults() {
  console.log("searching..", counter++);
}

function debounce(func, limiter) {
  let timer = null;
  return function (...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, limiter);
  };
}

let customDebounce = debounce(getSearchResults, 300);
