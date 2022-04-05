const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().trim();

//VSCode
const input = fs.readFileSync('예제.txt').toString().trim();

if ((input % 100 != 0 && input % 4 == 0) || input % 400 == 0) console.log('1');
else console.log('0');
