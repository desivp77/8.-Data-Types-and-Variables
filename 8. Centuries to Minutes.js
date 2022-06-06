// Write a program that receives a number of centuries and converts it to years, days, hours, and minutes.
// Input	Output
// 1	1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
// 5	5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes
// •	Assume that a year has 365.2422 days on average (the Tropical year).

function centuries(num){
 
    let years = num * 100;
    let days = Math.trunc(years*365.2422);
    let hours = 24*days;
    let minutes = 60*hours;

    console.log(`${num} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}

centuries(1); 
centuries(5);  