// Given three integers a ,b ,c, return the largest number obtained after inserting the \
// following operators and brackets: +, *, ().

function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);
}

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

function towerBuilder(nFloors) {
  let arr = [];
  const star = "*";
  const space = " ";
  for (let i = 1; i < nFloors + 1; i++) {
    arr.push(
      space.repeat(nFloors - i) +
        star.repeat(i + i - 1) +
        space.repeat(nFloors - i)
    );
  }
  return arr;
}

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2);
};
