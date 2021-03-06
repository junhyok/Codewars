/* 

We need a function that can transform a number into a string.

 What ways of achieving this do you know?

 Examples:
 numberToString(123); // returns '123';`   
 numberToString(999); // returns '999';`

 */

// My Solution
function numberToString(num) {
   // Return a string of the number here!
   return String(num);
}

//Better Solution
function numberToString(num) {
   return num.toString();
}
