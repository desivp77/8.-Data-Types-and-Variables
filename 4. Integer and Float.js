// You will receive 3 numbers. Your task is to find their sum and print result to the console in the following format:
// `{sum} - {type of the number (Integer or Float)}`


function floatMyBoat(firstN, secondN, thirdN){

    let sum = firstN + secondN + thirdN;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);

}

floatMyBoat(9, 100, 1.1); 
floatMyBoat(100, 200, 303);  