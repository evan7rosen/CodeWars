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

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

function bouncingBall(h, bounce, window) {
  let count = -1;
  if (h > 0 && bounce < 1 && bounce > 0 && window < h) {
    while (h > window) {
      count++;
      h *= bounce;
      count++;
    }
    return count;
  } else return count;
}

bouncingBall(30, 0.66, 1.5);
