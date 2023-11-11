//values(): This method returns an iterator that provides the values for each index in the array. It takes no arguments.
function values() {
  const array = ["apple", "orange", "grapes"];
  const iterator = array.values();

  for (let values of iterator) {
    console.log("values:", values);
  }
}

//length(): This property returns the length of the array.
function length() {
  const array = ["apple", "orange", "grapes"];
  console.log("length:", array.length);
}

//reverse(): This method reverses the order of the elements in the array.
function reverse() {
  const array = ["apple", "orange", "grapes"];
  array.reverse();
  console.log("reverse:", array);
}

//sort(): This method sorts the elements of an array in place and returns the sorted array. It can take an optional compare function as an argument.
function sort() {
  const array = ["banana", "apple", "orange", "grapes"];
  array.sort();
  console.log("sort:", array);
}

//at(): This method returns the element at the specified index in the array. It takes one argument: the index.
function at() {
  const array = ["banana", "apple", "orange", "grapes"];
  console.log("at:", array.at(1));
}

//fill(): This method fills all the elements of an array from a start index to an end index with a static value.
//It can take up to three arguments: the value to fill with, the start index, and the end index.
function fill() {
  const array = ["banana", "apple", "orange", "grapes"];
  array.fill("apple", 3, 0);
  console.log("fill:", array);
}

//from(): This method creates a new array from an array-like object or an iterable object.
//It can take up to two arguments: the object to convert to an array, and a mapping function to apply to each element of the new array.
function from() {
  const obj = { 0: "banana", 1: "apple", 2: "orange", 3: "grapes", length: 5 };
  const array = Array.from(obj);
  console.log("from:", array);
}

//join(): This method joins all the elements of an array into a string using a specified separator. It takes one optional argument: the separator to use.
function join(){
  const array = ["banana", "apple", "orange", "grapes"];
  const join = array.join(", ");
  console.log("join:", join);
}

//toString(): This method returns a string representing the array and its elements.
function toString(){
  const array = ["banana", "apple", "orange", "grapes"];
  const toString = array.toString();
  console.log("toString:", toString);
}

//pop(): This method removes the last element from an array and returns that element
function pop(){
  const array = ["banana", "apple", "orange", "grapes"];
  const pop = array.pop();
  console.log("pop:", pop);
  console.log("original array:", array);
}
