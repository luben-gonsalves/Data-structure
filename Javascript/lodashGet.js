function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let value = objectParam;
  let index = 0;

  while (value !== null && index < path.length) {
    value = objectParam[String(path[index])];
    index++;
  }

  value = index && index === path.length ? value : undefined;
  return value !== undefined ? value : defaultValue;
}

const john = {
  profile: {
    name: { firstName: "John", lastName: "Doe" },
    age: 20,
    gender: "Male",
  },
};

console.log(get(john, ["profile", "name"], null));

console.log(john);
