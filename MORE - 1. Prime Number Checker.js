// Write a function that receives a digit in the form of a word (as a string) and prints the digit (as a number).


function primeNumber(num) {
let isPrime = true;

// check if number is equal to 1
if (num === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (num > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`true`);
    } else {
        console.log(`false`);
    }
}

}

primeNumber('7');
primeNumber('8');
primeNumber('81');