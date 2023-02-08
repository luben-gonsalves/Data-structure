class Car {
  drive() {
    console.log("i am driving");
  }

  static test() {
    console.log("i am driving");
  }
}

let car1 = new Car();
console.log(car1.test());
