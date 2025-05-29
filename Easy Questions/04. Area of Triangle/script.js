//! Area of Triangle 
//* Write the function that takes the base and height of a triangle and return its area 

//? Output : 
//* triArea(3, 2)   Output : 3 
//* triArea(7, 4)   Output : 7 
//* triArea(10,10)  Output : 50

function triArea(base , length) {
    const areaOfTriangle = (base * length) / 2; 
    return areaOfTriangle; 
}; 


console.log(triArea(3, 2));  //* Output : 3 
console.log(triArea(7 , 4)); //* Output : 14 
console.log(triArea(10, 10)); //* Output : 50 