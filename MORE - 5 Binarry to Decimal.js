
// Write a function that reads an 8-bit binary number and converts it to a decimal.
// The input comes as one string element, representing a binary number.


function binToDec(num) {

    let digit = num; 
    let digit2 = parseInt(digit, 2);

    console.log(digit2); // prints 104
}

binToDec(00001001);
binToDec(11110000);