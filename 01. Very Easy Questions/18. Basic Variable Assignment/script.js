//! Basic Variable Assignment 
//* A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

//? Example : 
// nameString("Mubashir")   ------> "MubashirEdabit"
// nameString("Matt")       ------> "MattEdabit"
// nameString("javascript") ------> "javascriptEdabit" 

function nameString(input) {
 const concatenationOfString =  input + "Edabit"; 
 return concatenationOfString;
}; 


console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javascript"));


