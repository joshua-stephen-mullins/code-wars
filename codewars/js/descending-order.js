"use strict";


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


    console.log(descendingOrder(8921));
    console.log(descendingOrder(1234));
    console.log(descendingOrder(11));