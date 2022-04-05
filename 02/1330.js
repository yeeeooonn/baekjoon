const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split(' ');

//VSCode
const input = fs.readFileSync('예제.txt').toString().split(' ');

let A = parseInt(input[0]);
let B = parseInt(input[1]);

if (A > B) console.log('>');
else if (A < B) console.log('<');
else console.log('==');
