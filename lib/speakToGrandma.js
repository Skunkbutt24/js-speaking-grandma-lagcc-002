'use strict';

let speakToGrandma = function(speak)
{
    if(speak===speak.toUpperCase())
    {
        return 'NO, NOT SINCE 1938!';
    }
    else
    {
        return 'HUH?! SPEAK UP, SONNY!';
    }

};

module.exports = speakToGrandma;

console.log(speakToGrandma('Hi Nana, how are you?'))
console.log(speakToGrandma('WHAT DID YOU EAT TODAY?'))