'use strict';

function disemvowel(string){
    let vowels = ['a', 'e' , 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let j = 0;
    for (let i = 0; i < 100; i++){
            string = string.replace(vowels[i], '');
        console.log(string);
    } return string;
}


console.log(disemvowel('This website is for losers LOL!'));