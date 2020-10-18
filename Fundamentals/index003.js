/* 
Question 

We want an array, but not just any old array, an array with contents!
Write a function that produces an array with the numbers 0 to N-1 in it.
For example, the following code will result in an array containing the numbers 0 to 4:

the numbers 0 to N-1 

*/

// Answer 1
var arr = (N) => loop(N);

var startArray = [];

function loop(N) {
  for (var i = 0; i < N; i++) {
    startArray.push(i);
  }
  return startArray;
}

// [...Array(N).keys()]

function loop(N) {
  if (!N) {
    return [];
  }
  return [...Array(N).keys()];
}

//  Array(N).fill().map((_, i) => i);

function loop(N) {
  if (!N) {
    return [];
  }

  return Array(N)
    .fill()
    .map((_, i) => i);
}

//  Array.from({ length: n }, (_, i) => i);

var arr = (n) => Array.from({ length: n }, (_, i) => i);

//  (n ? [...Array(n).keys()] : []);

var arr = (n) => (n ? [...Array(n).keys()] : []);

// (N && [...Array(N).keys()]) || [];
var arr = (N) => (N && [...Array(N).keys()]) || [];
