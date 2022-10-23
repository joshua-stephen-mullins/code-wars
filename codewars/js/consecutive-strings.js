'use strict';
//
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
//     Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
//
// Concatenate the consecutive strings of strarr by 2, we get:
//
//     treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
//
// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
//     The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".
//
//     In the same way:
//     longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
//
// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
    console.log(strarr.length);
    if (strarr.length === 0 || k < strarr.length || k <= 0){
        return "";
    }
    let elementLengths = [];
    for (let i = 0; i < strarr.length; i++) {
        elementLengths.push(strarr[i].length);
    }
    let longestElement = elementLengths.indexOf(Math.max(...elementLengths));
    if ((strarr[longestElement] + strarr[longestElement + 1]) < (strarr[longestElement] + strarr[longestElement - 1])) {
        return strarr[longestElement] + strarr[longestElement + 1]
    } else {
        return strarr[longestElement] + strarr[longestElement - 1]
    }
}


console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) // "abigailtheta")