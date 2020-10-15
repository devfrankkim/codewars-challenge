let question =
  "Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.";

// var str = "How can mirrors be real if our eyes aren't real";
// Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

// Question
String.prototype.toJadenCase = function () {};

// answer 1

String.prototype.toJadenCase = function () {
  let returnString = [];
  let words = this.valueOf().split(" ");

  for (let i = 0; i < words.length; i++) {
    let wordsArray = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    returnString.push(wordsArray);
  }
  return returnString.join(" ");
};

// answer 2

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
