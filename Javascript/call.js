// call is a method that can be used to invoke a function and set its context explicitly.
//  It takes in the context as the first argument and any additional arguments as the rest of the parameters.

function add(a, b) {
  return a + b;
}

let sum = add.call(null, 2, 3);
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

person.print.call(person2);
