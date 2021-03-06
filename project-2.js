// Do not change any of the function names


const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x>=y){
    return x; 
  }else {
    return y;
  };
};

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
};

const isTenOrFive = (num) => {
  // return true if num is 10 or 5
  // otherwise return false
  if (num==10 || num==5){
    return true;
  }else{
    return false;
  }
};
// let a= isTenOrFive(1);
// console.log(a);

const isInRange = (num) => {
  // return true if num is less than 50 and greater than 20
  if (num<50 && num>20){
    return true;
  }else{
    return false;
  }
};

const isInteger = (num) => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (typeof(num)==="number" && Math.floor(num)!=0){
    return true;
  }else {
    return false;
  };
};
// let a = isInteger(0.8);
// console.log(a);

const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num%3==0 && num%5===0){
    return "fizzbuzz";
  }else if (num%5==0){
    return "buzz";
  }else if (num%3==0){
    return "fizz";
  };
};
// let test =fizzBuzz(5);
// console.log(test);

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num  === 1) {
    return false;
}// checking  if  number is greater than one or not

else if (num  > 1) {

    // iterating from 2 to number -1 (leaving 1 and itself )
    for (let i = 2; i < num ; i++) {
        if (num  % i == 0) {
         return false;
        
        }
    }

    if (num) {
        return true;
    } else {
        return false;
    }
}// check if number is less than 1
else {
    return false;
}
};
// let test = isPrime(3);
// console.log(test);

const returnFirst = (arr) => {
  // return the first item from the array
};

const returnLast = (arr) => {
  // return the last item of the array
};

const getArrayLength = (arr) => {
  // return the length of the array
};

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
};

const addItemToArray = (arr, item) => {
  // add the item to the end of the array
  // return the array
};

const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
};

const wordsToSentence = (words) => {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
};

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
};

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
