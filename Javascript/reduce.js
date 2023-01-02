Array.prototype.customReduce = function (callBack, initialValue) {
  let accumulator = initialValue;
  this.forEach((value, index) => {
    if (accumulator === undefined && initialValue === 0) {
      accumulator = value;
    } else {
      accumulator = callBack(accumulator, value, index, array);
    }
  });

  return accumulator;
};

let array = [1, 2, 3, 4, 5];

let sum = array.customReduce(function (prevVal, currentVal) {
  return prevVal + currentVal;
}, 0);

console.log(sum);
