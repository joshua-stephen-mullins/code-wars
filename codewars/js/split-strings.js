"use strict";
//
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//     Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function splitString(str){
    str = str.split("");
    let strAdd = "";
    for (let i = 0; i < str.length; i += 2){
         strAdd += str[i] + str[1] + ",";
    } return strAdd
}




console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]