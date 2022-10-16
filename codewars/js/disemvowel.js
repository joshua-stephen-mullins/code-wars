'use strict';

// homemade replaceAll

function fixedReplaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

function disemvowel(string){
    let vowels = ['a', 'e' , 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let j = 0;
    for (let i = 0; i < 100; i++){
        string = fixedReplaceAll(string, vowels[i], "");
        console.log(string);
    } return string;
}

// didnt work on codewars because of some nodejs issues... replaceAll doesnt work

//
// function disemvowel(string){
//     let vowels = ['a', 'e' , 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let j = 0;
//     for (let i = 0; i < 100; i++){
//             string = string.replace(vowels[i], '');
//         console.log(string);
//     } return string;
// }


console.log(disemvowel('This website is for losers LOL!'));