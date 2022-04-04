const fs = require('fs');

//백준
//const input = fs.readFileSync('/dev/stdin').toString().split(' ');

//VSCode
const input = fs.readFileSync('예제.txt').toString().split(' ');

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
