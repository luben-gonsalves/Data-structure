function flatten(value) {
  return Array.isArray(value) ? value.flatMap((num) => flatten(num)) : value;
}
// Single-level arrays are unaffected
flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively
console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
