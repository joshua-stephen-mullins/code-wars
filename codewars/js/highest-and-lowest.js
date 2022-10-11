"use strict";

function highAndLow(numbers){
    let justNumbers = numbers.replaceAll(',', "");
    return justNumbers.resplit('').sort();
}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));