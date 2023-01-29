function camelCase(str) {
  str = str.split("");
  return str
    .map(function (el, i) {
      if (el == "-" || el == "_") {
        el = str[i + 1].toUpperCase();
        str.splice(i + 1, 1);
      }
      return el;
    })
    .join("");
  //   if (!/[_]/.test(str)) {
  //     return str;
  //   }
  //   return str
  //     .toLowerCase()
  //     .replace(/([_])([a-z])/g, (_match, _p1, p2) => p2.toUpperCase());
}

function camelCaseKeys(object) {
  if (Array.isArray(object)) {
    return object.map((val) => camelCaseKeys(val));
  }

  if (typeof object !== "object" || object === null) {
    return object;
  }

  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      camelCase(key),
      camelCaseKeys(value),
    ])
  );
}

console.log(camelCaseKeys({ foo_bar: true }));
// { fooBar: true }

console.log(camelCaseKeys({ foo_bar: true, bar_baz: { baz_qux: "1" } }));
// { fooBar: true, barBaz: { bazQux: '1' } }

console.log(
  camelCaseKeys([{ baz_qux: true }, { foo: true, bar: [{ foo_bar: "hello" }] }])
);
// [{ bazQux: true }, { foo: true, bar: [{ fooBar: 'hello' }] }]
