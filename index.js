// values(): This method returns an iterator that provides the values for each index in the array. It takes no arguments.
function values() {
  const array = ["apple", "orange", "grapes"];
  const iterator = array.values();

  for (let values of iterator) {
    console.log("values:", values);
  }
}

// length(): This property returns the length of the array.
function length() {
  const array = ["apple", "orange", "grapes"];
  console.log("length:", array.length);
}

// reverse(): This method reverses the order of the elements in the array.
function reverse() {
  const array = ["apple", "orange", "grapes"];
  array.reverse();
  console.log("reverse:", array);
}

// sort(): This method sorts the elements of an array in place and returns the sorted array.
// It can take an optional compare function as an argument.
function sort() {
  const array = ["banana", "apple", "orange", "grapes"];
  array.sort();
  console.log("sort:", array);
}

// at(): This method returns the element at the specified index in the array. It takes one argument: the index.
function at() {
  const array = ["banana", "apple", "orange", "grapes"];
  console.log("at:", array.at(1));
}

// fill(): This method fills all the elements of an array from a start index to an end index with a static value.
// It can take up to three arguments: the value to fill with, the start index, and the end index.
function fill() {
  const array = ["banana", "apple", "orange", "grapes"];
  array.fill("apple", 0, 4);
  console.log("fill:", array);
}

// from(): This method creates a new array from an array-like object or an iterable object.
// It can take up to two arguments: the object to convert to an array, and a mapping function to apply to each element of the new array.
function from() {
  const obj = { 0: "banana", 1: "apple", 2: "orange", 3: "grapes", length: 3 };
  const array = Array.from(obj);
  const myname = Array.from("sreerag");
  console.log("from:", array);
}

// join(): This method joins all the elements of an array into a string using a specified separator.
// It takes one optional argument: the separator to use.
function join() {
  const array = ["banana", "apple", "orange", "grapes"];
  const join = array.join("..! ");
  console.log("join:", join);
}

// toString(): This method returns a string representing the array and its elements.
function toString() {
  const array = ["banana", "apple", "orange", "grapes"];
  const toString = array.toString();
  console.log("toString:", toString);
}

// pop(): This method removes the last element from an array and returns that element
function pop() {
  const array = ["banana", "apple", "orange", "grapes"];
  const pop = array.pop();
  console.log("pop:", pop);
  console.log("original array:", array);
}

// forEach() method executes a provided function once for each array element. It doesn't return anything,
// it just executes the callback function on each element of the array.
function forEach() {
  const array = ["banana", "apple", "orange", "grapes"];
  array.map((element) => {
    console.log("forEach:", element);
  });
}

// shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
function shift() {
  const array = ["banana", "apple", "orange", "grapes"];
  const shift = array.shift();
  console.log(shift);
  console.log("original array:", array);
}

// copyWithin() method shallow copies part of an array to another location in the same array and
// returns the modified array without modifying its length. Syntax.copyWithin(target, start, end).
function copyWithin() {
  let numbers = [1, 2, 3, 4, 5];
  numbers.copyWithin(2, 0, 2);
  console.log(numbers);
}

// push() method adds one or more elements to the end of an array and returns the new length of the array.
function push() {
  const fruits = ["apple", "orange", "grapes", "banana"];
  const push = fruits.push("jackfruit");
  console.log(push);
  console.log("array:", fruits);
}

// unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
function unshift() {
  const fruits = ["apple", "orange", "grapes", "banana"];
  const unshift = fruits.unshift("jackfruit");
  console.log("length:", unshift);
  console.log("array:", fruits);
}

// concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
function concat() {
  const fruits = ["apple", "orange", "grapes", "banana"];
  const vegetables = ["onion", "carrot", "cucumber"];
  const concat = fruits.concat(vegetables);
  console.log("new array:", concat);
}

// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
function splice() {
  const fruits = ["apple", "orange", "grapes", "banana"];
  //const splice = fruits.splice(start, deleteCount, item1, item2, ...itemN);
  const splice = fruits.splice(1, 2, "grapes");
  console.log("splice:", splice);
  console.log("array:", fruits);
}

// flat() This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
function flat() {
  const fruits = ["apple", ["orange", ["grapes"]], "banana"];
  const flat = fruits.flat();
  console.log("flat-method:", flat);
  console.log("array:", fruits);
}

// lastIndexOf() This method returns the last index at which a given element can be found in the array.
function lastIndexOf() {
  const numbers = [1, 2, 3, 4, 5, 6, 3];
  const lastIndexOf = numbers.lastIndexOf(3);
  console.log("lastIndexOf:", lastIndexOf);
  console.log("array:", numbers);
}

// indexOf(): This method returns the index of the first occurrence of a specified element in an array. If the element is not present,
// it returns -1.
function indexOf() {
  const numbers = [1, 2, 3, 4, 5, 6, 3];
  const indexOf = numbers.indexOf(3);
  console.log("indexOf:", indexOf);
}

// of(): This method creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.
function of() {
  const arr = Array.of("string", 2, true, null, undefined);
  console.log(arr);
}

// every(): This method checks if all elements in an array pass a test (provided as a function).
// It returns true if all elements pass the test; otherwise, it returns false.
function every() {
  const arr = [2, 4, 6, 8, 10];
  const isEven = (num) => num % 2 === 0;
  const every = arr.every(isEven);
  console.log(every);
}

// slice(): This method returns a shallow copy of a portion of an array into a new array object
// selected from begin to end (end not included)
function slice() {
  const fruits = [
    "apple",
    "orange",
    "grapes",
    "banana",
    "mango",
    "kiwi",
    "melon",
    "watermelon",
  ];
  const slice = fruits.slice(1, 3);
  console.log(slice);
}

// flatMap(): This method maps each element using a mapping function, then flattens the result into a new array.
function flatMap() {
  const numbers = [2, 4, 6, 8, 10];
  const flatMap = numbers.flatMap((x) => x * 2);
  console.log(flatMap);
}

// findIndex(): This method returns the index of the first element in an array that passes a test (provided as a function).
// If no element passes the test, it returns -1.
function findIndex() {
  const numbers = [10, 20, 30, 40, 50, 60];
  const greaterThan30 = (x) => x > 30;
  const result = numbers.findIndex(greaterThan30);
  console.log(result);
}

// find(): This method returns the value of the first element in an array that passes a test (provided as a function).
// If no element passes the test, it returns undefined.
function find() {
  const numbers = [10, 20, 30, 40, 50, 60];
  const greaterThan30 = (x) => x > 30;
  const result = numbers.find(greaterThan30);
  console.log(result);
}

// includes(): This method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
function includes() {
  const numbers = [10, 20, 30, 40, 50, 60];
  const has20 = numbers.includes(20);
  console.log(has20);
}

// entries(): This method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
function entries() {
  const array = [
    "apple",
    "orange",
    "grapes",
    "banana",
    "mango",
    "kiwi",
    "melon",
    "watermelon",
  ];
  const fruits = array.entries();
  // to make the fruits entries into objects
  // const obj = Object.fromEntries(fruits)
  // console.log(obj);
  for (let fruit of fruits) {
    console.log(fruit);
  }
}

// reduce(): This method applies a function to each element of an array and reduces the array to a single value.
// Regular expression to match email addresses
function reduce() {
  const fruits = ["apple", "orange", "banana", "grapes"];
  const sum = fruits.reduce((accumulator, currentValue) => {
    return accumulator.concat(", ", currentValue);
  });
  console.log(sum);
}

// reduceRight(): This method is similar to the reduce() method. However, it iterates over the array elements from right to left instead of from left to right.
function reduceRight() {
  const fruits = ["apple", "orange", "banana", "grapes"];
  const sum = fruits.reduceRight((accumulator, currentValue) => {
    return accumulator.concat(", ", currentValue);
  });
  console.log(sum);
}

// isArray(): This method determines whether the passed value is an array or not.
function isArray() {
  const fruits = ["apple", "orange", "banana", "grapes"];
  console.log(Array.isArray(fruits));
  const numbers = 123;
  console.log(Array.isArray(numbers));
}

// filter(): This method creates a new array with all elements that pass the test implemented by the provided function.
function filter() {
  const numbers = [10, 20, 30, 40, 50, 60];
  const filteredNumbers = numbers.filter((number) => {
    return number > 30;
  });
  console.log(filteredNumbers);
}

// keys(): This method returns an array containing the keys of the given object.
function keys() {
  const objs = { name: "Sreerag", age: 24, location: "Kerala" };
  const objKeysIntoArrays = Object.keys(objs);
  console.log(objKeysIntoArrays);
}

// values(): This method returns an array containing the values of the given object.
function objectValues() {
  const objs = { name: "Sreerag", age: 24, location: "Kerala" };
  const objValuesIntoArrays = Object.values(objs);
  console.log(objValuesIntoArrays);
}

// map(): This method creates a new array with the results of calling a provided function on every element in the calling array.
function map() {
  const numbers = [10, 20, 30, 40, 50, 60];
  const squaredNumbers = numbers.map((number) => {
    return number * number;
  });
  console.log(squaredNumbers);
}

function sortNumber() {
  const points = [40, 100, 0, 1, 5, 25];
  points.sort((a, b) => a - b);
  console.log(points);
}
