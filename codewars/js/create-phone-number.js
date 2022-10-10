"use strict";

function createPhoneNumber(numbers){
    let numbersString = numbers.join().replaceAll(',', "")
    return "(" + String(numbersString).substring(0, 3) + ") " + String(numbersString).substring(3, 6) + "-" + String(numbersString).substring(6, 10);
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// (123) 456-7890