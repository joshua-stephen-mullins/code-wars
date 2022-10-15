"use strict";

function arrayDiff (array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        let indicies = [];
        let numToRemove = array1.indexOf(array2[i]);
        while (numToRemove !== -1) {
                indicies.push(numToRemove);
                numToRemove = array1.indexOf(array2[i], numToRemove + 1);
            }
            // console.log(indicies);
            // console.log(array1);
            indicies = indicies.reverse();
        for (let j = 0; j < indicies.length; j++) {
                // if (i === 0) {
            array1.splice(indicies[j], 1);
                // } else {
                //     array1.splice(indicies[i - 1], 1);
                // }
                // console.log(array1);
            }
        }
    return array1;
}

console.log(arrayDiff([1,2,2,2,2,2,3,4,5,6], [1,2,3]));
console.log(arrayDiff([1,2], [1]));
console.log(arrayDiff([1,2,2], [1]));
console.log(arrayDiff([1,2,2], [2]));
console.log(arrayDiff([4,7,8,5,9,9], [9]));
console.log(arrayDiff([1,2,2], []));
console.log(arrayDiff([], [1,2]));

// function indexAll (array1, array2) {
//     let indicies = [];
//     let idx = array1.indexOf(array2[0]);
//     while (idx !== -1) {
//         indicies.push(idx);
//         idx = array1.indexOf(array2[0], idx + 1);
//     }
//     console.log(indicies);
// }
//
//
//
// indexAll([1,2,3,4,5,6], [1,2,3]);