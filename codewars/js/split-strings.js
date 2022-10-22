"use strict";
//
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


// function splitString(str){
//     str = str.split("");
//     let strAdd = "";
//     for (let i = 0; i < str.length; i += 2){
//          strAdd += str[i] + str[1] + ",";
//     } return strAdd
// }

function solution(str) {
    let strAdd = "";
    for (let i = 0; i < str.length; i += 2) {
        strAdd += str.substring([i], i + 2) + ",";
    }
    let strAddSplit = strAdd.split(",");
    strAddSplit.pop();
    for (let j = 0; j < strAddSplit.length; j++) {
        if (strAddSplit[j].length === 1) {
            strAddSplit[j] += '_';
        }
    } return strAddSplit
}



// for (let j = 0; j < strAddSplit.length; j++) {
//     if (strAddSplit[j].length === 0){
//         strAddSplit = strAddSplit.pop();
//     } else if (strAddSplit[j].length === 1) {
//         return strAddSplit
//     }



console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(solution("abcdef")); // ["ab", "cd", "ef"]);
console.log(solution("")); // []);