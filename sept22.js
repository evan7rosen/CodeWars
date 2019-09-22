// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2);
};

// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
  var digits = n
    .toString()
    .split("")
    .map(Number);
  return parseInt(digits.sort((a, b) => b - a).join(""));
}

descendingOrder(123456789);
