"use strict";
const numbers = [];

const number1 = parseInt(prompt("Enter the first number:"));
numbers.push(number1);
const number2 = parseInt(prompt("Enter the second number:"));
numbers.push(number2);
const number3 = parseInt(prompt("Enter the third number:"));
numbers.push(number3);
const number4 = parseInt(prompt("Enter the fourth number:"));
numbers.push(number4);
const number5 = parseInt(prompt("Enter the fifth number:"));
numbers.push(number5);

document.getElementById("numbers").innerHTML = "Numbers: " + numbers.join(", ");

const newNumber = parseInt(prompt("Enter a number to check:"));
if (numbers.includes(newNumber)) {
  document.getElementById("target").innerHTML +=
    "The number " + newNumber + " is in the list.";
} else {
  document.getElementById("target").innerHTML +=
    "The number " + newNumber + " is not in the list.";
}

numbers.pop();
document.getElementById("newNumbers").innerHTML =
  "Updated numbers: " + numbers.join(", ");

numbers.sort((a, b) => a - b);
document.getElementById("sortedNumbers").innerHTML =
  "Sorted numbers: " + numbers.join(", ");
