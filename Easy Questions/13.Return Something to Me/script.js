//! Return Something to Me !!!! 
//* Write a function that returns the string "something" joined with a space " " and the given argument a.

//? Output : 
//* giveMeSomething("is better than nothing") -----> "Something is better than nothing"
//* giveSomething("Jane Bob") ----------> "Something Jane Bob"
//* giveSomething("something") ---------> "Something something"


function giveMeSomething(input) {
    return `Something ${input}`
}; 

console.log(giveMeSomething("is Better than nothing"));
console.log(giveMeSomething("Jane Bob"));
console.log(giveMeSomething("something"));