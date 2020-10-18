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
  // Code here
  console.log(arguments[0]);

  let randomArray = [];
  for (let i = 0; i < arguments[0].length; i++) {
    randomArray.push(arguments[0][i]);
  }

  let sortArray = randomArray.sort((a, b) => {
    return a - b;
  });
  console.log(sortArray);
  let sumUp = sortArray[0] + sortArray[1];
  console.log(Number(sumUp));
  return Number(sumUp);
}
sumTwoSmallestNumbers([1, 20, 30, 2]);
// answer 2

function sumTwoSmallestNumbers([...numbers]) {
  // Code here

  let random = numbers.sort((a, b) => {
    return a - b;
  });
  console.log(random[0] + random[1]);
  return random[0] + random[1];
}
