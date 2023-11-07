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
  const reverse = array.reverse();
  console.log("reverse:", reverse);
}

reverse();
