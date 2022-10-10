"use strict";


function descendingOrder(number){
    let splitNumber = number.toString().split("");
    let sortedNumber = splitNumber.sort(function(a, b){return b - a}).join();
    return sortedNumber;
}


    console.log(descendingOrder('1234'));