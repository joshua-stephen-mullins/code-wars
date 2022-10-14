"use strict";
//
// function numOnly(mixedArray){
//     return !isNaN(mixedArray);
// }

function highAndLow(listInput){
    let numbersString = listInput.split(' ');
    let numbersArray = numbersString.map(function(number){
        return parseFloat(number);
    })
    numbersArray = numbersArray.sort(function(a, b){return a - b});
    return numbersArray[numbersArray.length - 1].toString() + " " + numbersArray[0].toString();
    };

numbersArray[0].toString()

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));