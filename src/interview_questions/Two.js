/* eslint-disable no-unused-vars */
// Method 1
function filterNumbersGreaterThanFive(numbers) {
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] < 5) numbers.splice(i, 1);
  }
  return numbers;
}

// Method 2
function filterNumbersGreaterThanFive2(numbers) {
  return numbers.filter((number) => number > 5);
}
