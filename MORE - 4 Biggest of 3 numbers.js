// Write a function that finds the biggest number.
// The input comes as 3 parameters.
// The output is the biggest of the input numbers.



function largestNum(num1, num2, num3) {

    let largest = Math.max(num1, num2, num3);
    console.log(largest);
}

largestNum(-2, 7, 3);
largestNum(130, 5, 99);
largestNum(43, 43.2, 43.1);
largestNum(2, 2, 2);
