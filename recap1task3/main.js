"use strict";
const a = prompt("Enter the value of the first side of the triangle:");
const b = prompt("Enter the value of the second side of the triangle:");
const c = prompt("Enter the value of the third side of the triangle:");

if (a != b && b != c && a != c) {
  document.getElementById("target").textContent = "The triangle is scalene.";
} else if (a == b && b == c && a == c) {
  document.getElementById("target").textContent =
    "The triangle is equilateral.";
} else if (a == b || b == c || a == c) {
  document.getElementById("target").textContent = "The triangle is isosceles.";
} else {
  document.getElementById("target").textContent =
    "The values entered do not form a triangle.";
}
