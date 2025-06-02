//! Find the Smallest and Biggest Numbers

//* Problem Link : https://edabit.com/challenge/Q3n42rEWanZSTmsJm

function minMax(arr) { 
    if(arr.length > 0) {

        const resultedArr = []; 
        const minNum = Math.min(...arr);
        //* Using Math.min() method to find minimum no among all and also do destructuring of array in this method 
        const maxNum = Math.max(...arr); 
        resultedArr.push(minNum);
        resultedArr.push(maxNum);

        return resultedArr;
    } else {
        return "Argument array was not be Empty";
    }; 

}; 


// console.log(minMax([])); 

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1,1]));