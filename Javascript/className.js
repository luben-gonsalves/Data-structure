function classNames(...args) {
  let classes = [];

  args.forEach((arg) => {
    if (!arg) return;
    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(arg);
      return;
    }

    if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
      return;
    }

    if (typeof arg === "object") {
      for (let key in arg) {
        if (arg[key]) {
          classes.push(key);
        }
      }
    }
  });

  return classes.join(" ");
}

classNames("foo", "bar"); // 'foo bar'
classNames("foo", { bar: true }); // 'foo bar'
classNames({ "foo-bar": true }); // 'foo-bar'
classNames({ "foo-bar": false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
