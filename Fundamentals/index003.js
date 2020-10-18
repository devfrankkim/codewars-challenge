/* 
Question 

We want an array, but not just any old array, an array with contents!
Write a function that produces an array with the numbers 0 to N-1 in it.
For example, the following code will result in an array containing the numbers 0 to 4:

the numbers 0 to N-1 

*/

const arr = (N) => loop(N);

let startArray = [];

function loop(N) {
  for (let i = 0; i < N; i++) {
    startArray.push(i);
  }
  console.log(...startArray);
  return startArray;
}
console.log(arr(5));
