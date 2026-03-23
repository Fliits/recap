const numbers = [];
const enter = true;
while (enter) {
  const number = parseInt(prompt("Enter a number (or leave empty to stop):"));
  if (!isNaN(number)) {
    numbers.push(number);
  } else {
    break;
  }
}
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

document.getElementById("evenNumbers").innerHTML =
  "Even numbers: " + evenNumbers.join(", ");
