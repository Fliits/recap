"use strict";
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
document.getElementById("fruits").innerHTML = "Fruits: " + fruits.join(", ");

let counter = 0;
for (let i = 0; i < fruits.length; i++) {
  counter++;
}
document.getElementById("numberOfFruits").innerHTML =
  "Number of fruits: " + counter;
document.getElementById("secondFruit").innerHTML = "Second fruit: " + fruits[1];
document.getElementById("lastFruit").innerHTML =
  "Last fruit: " + fruits[fruits.length - 1];

const vegetables = [];
const vegetable1 = prompt("Enter a vegetable:");
vegetables.push(vegetable1);
const vegetable2 = prompt("Enter another vegetable:");
vegetables.push(vegetable2);
const vegetable3 = prompt("Enter one more vegetable:");
vegetables.push(vegetable3);
document.getElementById("vegetables").innerHTML =
  "Vegetables: " + vegetables.join(", ");

counter = 0;
for (let i = 0; i < vegetables.length; i++) {
  counter++;
}
document.getElementById("numberOfVegetables").innerHTML =
  "Number of vegetables: " + counter;
