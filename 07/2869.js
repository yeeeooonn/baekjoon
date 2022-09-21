const fs = require('fs');

//백준
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
//VSCode
//const input = fs.readFileSync('예제.txt').toString().split(' ');

const A = input[0];
const B = input[1];
const V = input[2];

let day = (V - B) / (A - B); //총 소요일
if ((V - B) % (A - B) != 0) day++;

console.log(Math.floor(day));
