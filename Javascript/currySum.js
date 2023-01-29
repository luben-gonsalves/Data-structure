function sum(numberA) {
  return function (numberB) {
    return numberB === undefined ? numberA : sum(numberA + numberB);
  };
}

console.log(sum(1)(2)());
