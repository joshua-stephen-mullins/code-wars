"use strict";

// tried writing it using a variable

function descendingOrder(n){
    n = n.toString().split("");
    let sortedNumber = n.sort(function(a, b){return b - a}).join().replaceAll(',', "");
    return sortedNumber;
}


//     console.log(descendingOrder('1234'));


// function descendingOrder(n) {
//     let splitNumber = n.toString().split("");
//     let sortedNumber = splitNumber.sort(function(a, b){return b - a}).join().replaceAll(',', "");
//     return sortedNumber;
// }


    // console.log(descendingOrder(8921));
    // console.log(descendingOrder(1234));
    // console.log(descendingOrder(11));

// attempting to combine my variable in and write into a single line

function descendingOrder(number){
    return number.toString().split("").sort(function(a, b){return b - a}).join().replaceAll(',', "");
}

console.log(descendingOrder(8921));
console.log(descendingOrder(1234));
console.log(descendingOrder(11));