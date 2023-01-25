Array.prototype.CustomMap = function (callBack) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callBack(this[i]));
  }

  return result;
};

let array = [1, 2, 3, 4, 5];

let sqauredArray = array.CustomMap(function (val) {
  return val * 2;
});

console.log(sqauredArray);
