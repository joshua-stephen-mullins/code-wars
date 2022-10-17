'use script';

function isSquare(n){
    if (n < 0){
        return false + n + ': Negative numbers cannot be square numbers'
    } else if (Math.sqrt(n) == Math.sqrt(n).toFixed()) {
        return n + " is a square number " + "(" + Math.sqrt(n) + " * " + Math.sqrt(n) + ')';
    } else {
        return n + " is not a square number";
    }
}

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));