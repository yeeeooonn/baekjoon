const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split(' ');

//VSCode
const input = fs.readFileSync('예제.txt').toString().split(' ');

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

if (A == B && B == C) console.log(10000 + A * 1000);
else if (A == B) console.log(1000 + A * 100);
else if (B == C) console.log(1000 + B * 100);
else if (A == C) console.log(1000 + A * 100);
else console.log(Math.max(A, B, C) * 100);
