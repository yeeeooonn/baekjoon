const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

let answer = '';

for (let i = 0; i < Number(input[0]); i++) {
	let numbers = input[i + 1].split(' ');
	let hap = 0;
	let count = 0;

	for (let j = 0; j < Number(numbers[0]); j++) {
		hap += Number(numbers[j + 1]);
	}

	for (let j = 0; j < Number(numbers[0]); j++) {
		if (hap / Number(numbers[0]) < Number(numbers[j + 1])) count++;
	}
	answer += ((count / Number(numbers[0])) * 100).toFixed(3) + '%\n';
}
console.log(answer);
