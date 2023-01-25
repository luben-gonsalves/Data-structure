// bind is similar to call, but instead of immediately invoking the function, it returns a new function with the context set.
// This allows you to create a new function with a specific context that can be invoked later

let person = {
  name: "John",
  print: function () {
    console.log(this.name);
  },
};

let person2 = {
  name: "Marry",
};

let p = person.print.bind(person2);
p();
