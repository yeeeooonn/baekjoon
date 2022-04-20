const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

const number = Number(input[0]) * Number(input[1]) * Number(input[2]);

let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < String(number).length; i++) {
	let a = String(number).charAt(i);
	numbers[a]++;
}

let answer = '';
for (let i = 0; i < numbers.length; i++) {
	answer += numbers[i] + '\n';
}
console.log(answer);
