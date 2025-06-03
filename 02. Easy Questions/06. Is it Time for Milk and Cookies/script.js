//! Is it Time for Milk and Cookies

//* Problem Link :

function timeForMilkAndCookies(date) {
  const month = date.getMonth(); //* Output was 11 
//* First we extract Month from the Date we created 
//* In Date Object of Javascript our indexing start from 0 so 0 was January and 11 was december 
  if (month === 11) {
    return true;
  } else {
    return false;
  };
};


console.log(timeForMilkAndCookies(new Date(2013, 11, 24 )));  // Output : true 
console.log(timeForMilkAndCookies(new Date(2013, 0 , 23)));   // Output : false 
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));  // Output : true 
