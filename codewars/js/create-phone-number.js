"use strict";


// trying with a variable first
// function createPhoneNumber(numbers){
//     let numbersString = numbers.join().replaceAll(',', "")
//     return "(" + String(numbersString).substring(0, 3) + ") " + String(numbersString).substring(3, 6) + "-" + String(numbersString).substring(6, 10);
// }
//
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// (123) 456-7890


// trying without the variable

function createPhoneNumber(numbers) {
    return "(" + String(numbers.join().replaceAll(',', "")).substring(0, 3) + ") " + String(numbers.join().replaceAll(',', "")).substring(3, 6) + "-" + String(numbers.join().replaceAll(',', "")).substring(6, 10);
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([5, 2, 6, 9, 4, 3, 9, 2, 9, 9]));