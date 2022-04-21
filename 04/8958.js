const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

let answer = '';

for (let i = 0; i < Number(input[0]); i++) {
	let str = input[i + 1];
	let score = 0;
	let hap = 0;
	for (let j = 0; j < str.length; j++) {
		if (str.charAt(j) == 'O') {
			score++;
		} else score = 0;
		hap += score;
	}
	answer += hap + '\n';
	hap = 0;
}
console.log(answer);
