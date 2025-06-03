//! Which functions return the larger number 

//* Problem Link : https://edabit.com/challenge/o7TwicAHWuMkjbDqQ

function whichIsLarger(f, g) {
    const firstFunction = f(); 
    const secondFunction = g(); 

    if(firstFunction > secondFunction) {
        return "f";
    }else if(secondFunction > firstFunction) {
        return "g";
    }else {
        return "neither";
    }; 
}; 



console.log(whichIsLarger(() => 5, () => 10));  // Output : g 
console.log(whichIsLarger(()=> 25, () => 25));  // Output : neither 
console.log(whichIsLarger(() => 505050, () => 5050) ); // Output : f 



