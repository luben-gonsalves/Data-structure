function add(a, b) {
  return a + b;
}

let sum = add.apply(null, [2, 3]);
console.log(sum);

let person = {
  name: "John",
  print: function () {
    console.log(this.name);
  },
};

let person2 = {
  name: "Marry",
};

person.print.apply(person2);
