"use strict";
const celsius = prompt("Enter the temperature in Celsius:");
const fahrenheit = (celsius * 9) / 5 + 32;
document.getElementById("target").textContent =
  "Temperature in Fahrenheit: " + fahrenheit;
