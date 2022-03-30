let fs = require('fs');
//백준
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//VSCode
let input = fs.readFileSync('예제.txt').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a - b);
