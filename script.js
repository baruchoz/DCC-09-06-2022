"use strict";

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// Solution 1
function solutionOne(string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr.splice(i, 1, ` ${arr[i]}`);
    }
  }
  return arr.join("");
}

// Solution 2
function solutionTwo(string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr.splice(i, 0, " ");
      i++;
    }
  }
  return arr.join("");
}

// Solution 3 - Regex
function solutionThree(string) {
  return string.replace(/([A-Z])/g, " $1");
}

// Solution 4 - Regex Arrow function
const solutionFour = (string) => string.replace(/([A-Z])/g, " $1");

console.log(solutionOne("camelCaseTest"));
console.log(solutionTwo("camelCaseTest"));
console.log(solutionThree("camelCaseTest"));
console.log(solutionFour("camelCaseTest"));
