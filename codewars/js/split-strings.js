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

function splitString(str){
    let strAdd = "";
    for (let i = 0; i < str.length; i += 2){
        strAdd += str.substring([i], i + 2) + ",";
    }
    console.log(strAdd);
    let strAddSplit = strAdd.split(",");
    console.log(strAddSplit);
    for (let j = 0; j < strAddSplit.length; j++) {
        if (strAddSplit[j].length < 1){
            strAddSplit = strAddSplit.pop();
        } else if (strAddSplit[j].length === 1) {
            return strAddSplit
        }
    }
}


console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]