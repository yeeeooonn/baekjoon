const fs = require('fs');
//백준
//const input = fs.readFileSync('dev/stdin').toString();
//VSCode
const input = fs.readFileSync('예제.txt').toString();

let answer = '';
for (let i = 0; i < Number(input); i++) {
	for (let j = 1; j < Number(input) - i; j++) {
		answer += ' ';
	}
	for (let j = 0; j <= i; j++) {
		answer += '*';
	}
	answer += '\n';
}
console.log(answer);
