// Author: Justin Miller
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var newArray = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      newArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
      newArray.push("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
      newArray.push("Buzz");
    } else {
      console.log(i);
      newArray.push(`${i}`);
    }
  }
  return newArray;
};
