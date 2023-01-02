Array.prototype.customSort = function (compareFunction) {
  let length = this.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (compareFunction(this[j], this[j + 1]) > 0) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};

let array = [4, 5, 72, 3, 3, 1];

let sortedArray = array.customSort(function (a, b) {
  return b - a;
});

console.log(sortedArray);
