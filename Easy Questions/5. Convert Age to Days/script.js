//! Convert Age to Days
//* Create a function which takes age in a year and convert into days

//* Notes :
// 1. Use 365 days as the length of a year in this challenge.
// 2. Ignore a leap years and days between last birthday and now.
// 3. Expect only  expect the positive input integer.

//? Output :
// calcAge(65)  ----> 23725
// calcAge(0)   ----> 0
// calcAge(20)  ----> 7300

function calcAge(age) {
  if (age < 0) {
    return "Input valid age !!!!";
  }

  const TOTAL_DAYS_IN_YEAR = 365;
  const calculateAgeInDays = age * TOTAL_DAYS_IN_YEAR;

  return `Your age in days are ${calculateAgeInDays}`;
}; 


console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));



