// Write a program that receives a number n.  
// For all numbers in the range [1…n] print the number and if it is special or not (True / False).
// •	A number is special when its sum of digits is 5, 7 or 11.

// To calculate the sum of digits of given number num, you might repeat the following: sum the last digit
//  (num % 10) and remove it (sum = sum / 10) until num reaches 0. Use parseInt() while dividing to get only integer numbers.


    // for (let i = 1; i <= num; i++) {
    //     let isSpecial = false;
    //     let numToString = String(i);
    //     let result = 0;
    //     for (let i = 0; i < numToString.length; i++) {
    //         let currentNum = Number(numToString[i]);
    //         result += currentNum;
    //     }

    //     if (result === "5" || result === "7" || result === "11") {
    //         isSpecial = true;
    //     }
    //     else if (isSpecial) {
    //         console.log(`${i} -> True`);
    //     } 
    //     else {
    //         console.log(`${i} -> False`);
    //     }



    // }


function specialNumbers(num) {

    let isSpecial = false;
    for ( let i = 1; i <= num; i++ ) {
        let numToString = String(i);
        let result = 0;
        for (let i = 0; i < numToString.length; i++) {
            let currentNum = Number(numToString[i]);
            result += currentNum;
            
        } 
        
        if ( result === 5 || result === 7 || result === 11) {
            isSpecial = true;
        }

        if (isSpecial) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }  

}


specialNumbers(15);
specialNumbers(20);  