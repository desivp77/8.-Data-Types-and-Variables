// You will receive 3 parameters (string, char, string).
// The first string will be a word with a missing char replaced with an underscore '_'.
// You have to replace the missing character (underscore) of the first string with the character passed as the second parameter and compare the result with the second string.
// If they are equals, you should print "Matched", otherwise print "Not Matched".

function replaceCh(str, char, result){
let res=str.replace('_', char);
let output= res === result? "Matched": "Not Matched";
console.log(output);
}

replaceCh('Str_ng', 'I', 'Strong'); 
replaceCh('Str_ng', 'i', 'String');  