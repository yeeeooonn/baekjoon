const fs = require('fs');

//백준
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

//VSCode
//const input = fs.readFileSync('예제.txt').toString().split('\n');

const num = input[0].split(' ');
const score = input[1].split(' ');
score.sort((a, b) => a - b);

console.log(score[num[0] - num[1]]);
