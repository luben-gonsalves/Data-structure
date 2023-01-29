Array.prototype.customMap = function (callBack) {
  let result = new Array(this.length);

  this.forEach((value, index, array) => {
    if (Object.hasOwn(this, index)) {
      result[index] = callBack(value, index, array);
    }
  });

  return result;
};

let array = [1, 2, 3, , 4, 5];

let sqauredArray = array.customMap(function (val) {
  return val * 2;
});

console.log(sqauredArray);
