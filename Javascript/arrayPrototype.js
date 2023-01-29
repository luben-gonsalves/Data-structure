Array.prototype.sqaure = function () {
  return this.map((val) => val * val);
};

console.log([1, 2, 3, 4, 5, 6].sqaure());
