"use strict";

function findOutlier(array){
    return array.sort((n) => n % 2);
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));