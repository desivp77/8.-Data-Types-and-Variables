// Write a function, which receives two names as string parameters and a delimiter. Print the names joined by the delimiter.

function names(firstName, secondName, spacer){
console.log(`${firstName}${spacer}${secondName}`);
}

names('John', 'Smith', '->'); 
names('Jan', 'White', '<->'); 
names('Linda','Terry','=>');  