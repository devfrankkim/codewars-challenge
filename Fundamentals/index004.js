  /*
    Question 1: Clean the room function: 
    given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
    make a function that organizes these into individual array that is ordered. 

    For example answer(ArrayFromAbove) 
    should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
    */

    /*
    Bonus: Make it so it organizes strings differently from number types. 
    i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
   */

  let givenNumbers = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
  
  function nestedArray(arr){

   let sortArr = arr.sort((a,b) => a - b)
    
   let newArray = [];

   // [1, 2, 4, 5, 10, 20, 391, 392, 591]
   let uniqueArr = givenNumbers.filter((value, index, self) => {
     return self.indexOf(value) === index
   })
   
   function counter(sortArr, uniqueValue){
     return sortArr.filter((arrValue) => (arrValue === uniqueValue))
   }

   // [1, 2, 4, 5, 10, 20, 391, 392, 591]
   uniqueArr.forEach(uniqueValue => {
     
   let filteredArr = counter(sortArr, uniqueValue);
   if(filteredArr.length > 1){
     newArray.push(filteredArr)
   } else {
     newArray.push(...filteredArr)
   }
 });
   console.log(newArray);
 }


nestedArray(givenNumbers)





  const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
  const array2 = [1, "3", "2", 2, 'z', 'Z', 77, 12, 'zero', 'to', 'mastery'];
   
  // overall function that accepts an input of an array- to sort array run organaiza(array);
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
   
   
  const organaiza = a => {
   
   
  // creates all variables required for storing parts of the input array as well as the final output array 
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
   
    let arr = [].concat(a);
    let final = [];
    let tempNum = [];
    let tempStr =[];
    let temp =[];
   
   
  // for of loop that for each item of the input array checks: if its a number (if so pushes the value into tempNum), if its a string (if so pushes the values into tempStr)
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
   
    for (item of arr) {
      if (typeof item === 'number') {tempNum.push(item)}
      if (typeof item === 'string') {tempStr.push(item)}
    }
   
   
  // takes the array items that were numbers and arranges them in ascending order using sort which accepts a positive or negative 
  // value from its inner function and then puts the values defined as positive (or truthy) first in the array.
  // In this case the function accepts two inputs (a,b) and subtracts them to get a positive/negative/0 number
  // which sort then decides which index to give 'a' based on the returned value
  // If the returned value is negative ie(a > b) then a is sorted to an index lower than b 
  // intuitively it follows that if the returned value is positive ie(b > a) then b is indexed lower than a and if the returned value 
  // is 0 then their positions respective to one another remain unchanged.
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
   
    tempNum.sort((a, b) => a - b);
   
   
  // does a similar thing but for strings on the UFT-16 unit code value basis using localecompare sorting the tempStr variable
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
   
    tempStr.sort((a, b) => a.localeCompare(b, 'en', {sensitivity: 'base'}));
   
   
    const func = anyarray => {
   
  // uses the filter method which accepts a function that returns a boolean and, if true is returned, it puts those entries into temp
  // in this case if the entry of the input array filter is looking at is the same as the starting entry of the array filter that value into temp
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
   
          temp = anyarray.filter(num => num === anyarray[0]);
   
  // cuts off the input array from index 0 (first entry ) to the length of temp (which is filled with the numbers that are equal to the first entry of array)
  // so in  other words it removes all matching numbers that are now in temp. 
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
   
   
          anyarray.splice(0,temp.length);
   
  // conditional statement: is the length of temp greater than 1 if yes put temp into final if no just put the first entry into final
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
   
          temp.length > 1 ? final.push(temp) : final.push(temp[0]);
          
   
    }
   
  // so this while loop is how it automates itself iterating over the whole array grabbing different groups of numbers each time the function 'func' is called 
  // As the filtered entries are spliced off the original the conditional statement checks if the length of the sorted numbers array "tempNum" is greater than 0
  // so if there are more entries yet to be filtered it will continually run 'func' which filters the leftover numbers after the initial splicing, seperating them into the temp variable
  // and then cutting off what was put into temp from the original array before finally pushing the contents of temp into final 
  //(all of them if temp has more than one entry and only the first entry if it has 1 entry
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
   
    while (tempNum.length > 0) {
          func(tempNum);
          
    }
   
  // combines the tempStr array filled with the sorted strings with the final array which already contains the sorted numbers but only if the tempStr array contains some strings
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
   
   
    if (tempStr.some(x => typeof x === 'string')) {
      return [final].concat([tempStr]);
    } else return final
  }
   
  organaiza(array);