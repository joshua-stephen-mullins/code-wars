"use strict";
//
// function numOnly(mixedArray){
//     return !isNaN(mixedArray);
// }

function highAndLow(listInput){
    let numbers = listInput.split(' ').sort();
    return numbers;
    };



console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));