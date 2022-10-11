"use strict";


//Does not work with negative numbers
//
// function findOutlier(arrayInput){
//     let arrayOddSorted =  arrayInput.sort((a, b) => b % 2 - a % 2 || a - b);
//     if (arrayOddSorted[0] % 2 !== arrayOddSorted[1] % 2){
//         return arrayOddSorted[0];
//     } else {
//         let arrayEvenSorted = (arrayInput.sort((a, b) => b % 2 - a % 2 || a - b)).reverse();
//         return arrayEvenSorted[0];
//     }
// }


// function(a, b) {
//     return b % 2 - a % 2 || a - b
//
//     (a, b) => b % 2 - a % 2 || a - b);
//     console.log(array)
// }

//trying with absolute values

function findOutlier(arrayInput){
    let arrayOddSorted =  arrayInput.sort((a, b) => Math.abs(b % 2) - Math.abs(a % 2) || a - b);
    if (arrayOddSorted[0] % 2 !== arrayOddSorted[1] % 2){
        return arrayOddSorted[0];
    } else {
        let arrayEvenSorted = (arrayInput.sort((a, b) => Math.abs(b % 2) - Math.abs(a % 2) || a - b)).reverse();
        return arrayEvenSorted[0];
    }
}



console.log(findOutlier([2, 4, 12, 100, 4, 11, 2602, 36]));
console.log(findOutlier([3, 1, 17, 2, 44, 1000, -3, -35, -100000000007, -20, -44, 1, 0]));
console.log(findOutlier([-1, -44, -33]));
console.log(findOutlier([-2, -4, -12, -100, -4, -11, -2602, -36]));
console.log(findOutlier([3, 12, 15, 101, 555, 77, 35, 99]));
console.log(findOutlier([-3, 12, 15, 101, 555, 77, 35, 99]));
console.log(findOutlier([-93292367,142608311,157207733,62467934,138834095,43031953,26900517,-6995513,45426237,-138593149,-101124561,-58124197,194960615,-181071589,140919131,-93602631,-145082201,131837981,-177838391,-106342459,-7627239,-117197369,11626611,-169651257,-192350841,-81227081,84801733,86915963,123976199,-112706571,-74394147,92565805,-102337141,76079219,32368357,-197545679,65823545,-80331891,8276971,-54234987,-46803449,50953039,86393]));