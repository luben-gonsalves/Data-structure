function deepClone(obj) {
  let newObject = Object.assign({}, obj);
  Object.keys(newObject).forEach((key) => {
    if (Array.isArray(obj[key])) {
      newObject[key] = obj[key];
    } else if (typeof obj[key] === "object") {
      deepClone(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  });

  return Array.isArray(obj) ? Array.from(clone) : clone;
}

const originalObject = {
  a: 1,
  b: {
    c: 2,
    d: [1, 2, 3],
  },
  c: new Date(),
};

let newObject = Object.assign({}, originalObject);
console.log(newObject);
