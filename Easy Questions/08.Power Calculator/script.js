//! Power Calculator 
//* Create function that takes two into voltage and current and returns the calculated power 

//? Output : 
// circuitPower(230 , 10)  ----> 2300
// circuitPower(110 , 3)   ----> 330 
// circuitPower(480 , 20)  ----> 9600 

function circuitPower(voltage , current) {
    const calculatePower = voltage * current; 
    return calculatePower; 
}; 


console.log(circuitPower(230, 10)); // Output : 2300 
console.log(circuitPower(110 , 3)); // Output : 330 
console.log(circuitPower(480, 20)); // Output : 9600 