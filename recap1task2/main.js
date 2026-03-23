"use strict";
const x1 = prompt("Give the x coordinate of point x:");
const y1 = prompt("Give the y coordinate of point x:");
const x2 = prompt("Give the x coordinate of point y:");
const y2 = prompt("Give the y coordinate of point y:");

const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
document.getElementById("target").textContent =
  "The distance between the points is: " + distance;
