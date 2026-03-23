"use strict";
const score = prompt("Enter your score:");
let grade = null;
if (0 <= score && score <= 39) {
  grade = 0;
} else if (40 <= score && score <= 51) {
  grade = 1;
} else if (52 <= score && score <= 63) {
  grade = 2;
} else if (64 <= score && score <= 75) {
  grade = 3;
} else if (76 <= score && score <= 87) {
  grade = 4;
} else if (88 <= score && score <= 100) {
  grade = 5;
}
document.getElementById("target").innerHTML = "Your grade is: " + grade;
