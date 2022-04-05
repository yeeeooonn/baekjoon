const fs = require('fs');

//백준
//const input = fs.readFileSync(0).toString().split('\n');

//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

let x = parseInt(input[0]);
let y = parseInt(input[1]);

if (x > 0 && y > 0) console.log('1');
else if (x > 0 && y < 0) console.log('4');
else if (x < 0 && y < 0) console.log('3');
else console.log('2');
