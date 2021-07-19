// My human age
const myAge = 25;
// early part of my age is the first 2
let earlyYears = 2;
// ealry years in dog years is 10.5 years each
earlyYears *= 10.5;
// later part of my age is myAge - first 2 
let laterYears = myAge - 2;
// later years in dog years is 4 dog years each
laterYears *= 4;
// print my early and later dog years
console.log(earlyYears + ' ' + laterYears);
// add early and later dog years
let myAgeInDogYears = earlyYears + laterYears;
// set my name in lowercase
let myName = 'Gideon'.toLowerCase();
// print details
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
