// testing map()

// test("map() should return an array with the same number of elements", () => {
//   const result = map([1], () => {});
//   equal(result.length, 1);
// });

// test("map() should transform each element of the array using the fn argument", () => {
//   const result = map([1], (x) => x + 1);
//   equal(result[0], 2);
// });

// test("map() should transform multiple elements of the array using the fn argument", () => {
//   const result = map([1, 2, 3], (x) => x + 1);
//   equal(result, [2, 3, 4]);
// });

// testing filter()

// test("filter() should return an filtered array by the conditions of the callback", () => {
//   const result = filter([3, 1, 3, 5, 7, 9, 7, 6, 1, 7], (x) => x % 2 === 0);
//   equal(result[0], 6);
// });

// test("every() should return false if one of the array elements doesn't meet the condition of the callback", () => {
//   const result = every([3, 1, 2, 3, 5, 7, 9, 7, 6, 1, 7], (x) => x % 2 !== 0);
//   equal(result, false);
// });
// test("some() should return true if one of the array elements meets the condition of the callback", () => {
//   const result = some([3, 1, 2, 3, 5, 7, 9, 7, 6, 1, 7], (x) => x % 2 === 0);
//   equal(result, true);
// });
// test("some() should return true if one of the array elements meets the condition of the callback", () => {
//   const result = some([3, 1, 3, 5, 7, 9, 7, 1, 7], (x) => x % 2 === 0);
//   equal(result, false);
// });

// test("find() should return the element that is true in the callback", () => {
//   const result = find([3, 1, 3, 5, 7, 9, 6, 7, 1, 7], (x) => x % 2 === 0);
//   equal(result, 6);
// });
test("reduce() should reduce an element down, using the callback function to do so", () => {
  const result = reduce([3, 5], (total, x) => total + x);
  equal(result, 8);
});
