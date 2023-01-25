// Closure means that an inner function always has access to the vars and parameters of
// its outer function, even after the outer function has returned

// Benefits - data privacy, currying concept

function counter() {
  let count = 0;

  return {
    add: function () {
      count++;
    },
    subtract: function () {
      count--;
    },
    print: function () {
      console.log(count);
    },
  };
}

let c = counter();
c.add();
c.print();

let b = counter();
b.subtract();
b.print();
