// Write a function that receives a digit in the form of a word (as a string) and prints the digit (as a number).


function digitToWord(lastDigit2Str){

    if (lastDigit2Str === 'one') {
        console.log(`1`);
    }

    else if (lastDigit2Str === 'two') {
        console.log(`2`);
    } 

    else if (lastDigit2Str === 'three') {
        console.log(`3`);
    } 

    else if (lastDigit2Str === 'four') {
        console.log(`4`);
    } 

    else if (lastDigit2Str === 'five') {
        console.log(`5`);
    } 

    else if (lastDigit2Str === 'six') {
        console.log(`6`);
    } 

    else if (lastDigit2Str === 'seven') {
        console.log(`7`);
    } 

    else if (lastDigit2Str === 'eight') {
        console.log(`8`);
    } 

    else if (lastDigit2Str === 'nine') {
        console.log(`9`);
    } 

    else if (lastDigit2Str === 'zero') {
        console.log(`0`);
    } 
 
    else {
        console.log(`error`);
    } 

}

digitToWord('nine');
digitToWord('two');
digitToWord('zero');