const fs = require('fs');
//백준
//const input = fs.readFileSync('dev/stdin').toString().split('\n');
//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

let answer = '';
for (let i = 1; i < Number(input[0]) + 1; i++) {
	let num = input[i].split(' ');
	answer += `Case #${i}: ${Number(num[0]) + Number(num[1])}\n`;
}
console.log(answer);
