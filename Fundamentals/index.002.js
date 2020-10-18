/*
Create a function that 
returns the sum of the two lowest positive numbers 
given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

// answer 1
function sumTwoSmallestNumbers(numbers) {
  let randomArray = [];
  for (let i = 0; i < arguments[0].length; i++) {
    randomArray.push(arguments[0][i]);
  }
  let sortArray = randomArray.sort((a, b) => a - b);
  return sortArray[0] + sortArray[1];
}

// answer 2

function sumTwoSmallestNumbers([...numbers]) {
  let random = numbers.sort((a, b) => a - b);
  return random[0] + random[1];
}

sumTwoSmallestNumbers([1, 20, 30, 2]);

// answer 3

function sumTwoSmallestNumbers(numbers) {
  let [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

// answer 4
let sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y);

sumTwoSmallestNumbers([1323, 20, 30, 2]);

// answer 5

function sumTwoSmallestNumbers(numbers) {
  let min = Number.MAX_SAFE_INTEGER;
  let secondMin = Number.MAX_SAFE_INTEGER;

  let n;
  for (i = 0; i < numbers.length; i++) {
    n = numbers[i];
    if (n < min) {
      secondMin = min;
      min = n;
    } else if (n < secondMin) {
      secondMin = n;
    }
  }

  return min + secondMin;
}

// answer 6
function sumTwoSmallestNumbers(numbers) {
  let lowest = numbers
    .sort(function (a, b) {
      return b - a;
    })
    .slice(-2);
  return lowest.pop() + lowest.pop();
}

//answer 7
function sumTwoSmallestNumbers(numbers) {
  if (!(numbers instanceof Array) || numbers.length < 4) return;
  let tempArray = [].concat(numbers);
  const [a, b] = tempArray.sort((a, b) => a - b);
  return a + b;
}
