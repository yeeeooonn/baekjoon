const fs = require('fs');

//백준
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//VSCode
let input = fs.readFileSync('예제.txt').toString().split('\n');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a * (b % 10));
console.log(a * Math.floor((b % 100) / 10));
console.log(a * Math.floor(b / 100));
console.log(a * b);
