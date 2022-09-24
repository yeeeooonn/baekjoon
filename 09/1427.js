const fs = require('fs');

//백준
const input = fs.readFileSync('/dev/stdin').toString().split('');

//VSCode
//const input = fs.readFileSync('예제.txt').toString().split('');

input.sort((a, b) => b - a);
console.log(input.join(''));
