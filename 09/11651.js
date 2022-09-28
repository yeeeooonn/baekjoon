const fs = require('fs');

//백준
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//VSCode
//const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const num = input[0];
input.shift();
let answer = '';
const arr = input.map((a) => a.split(' ').map((num) => parseInt(num)));

arr
	.sort((a, b) => {
		if (a[1] !== b[1]) return a[1] - b[1];
		else return a[0] - b[0];
	})
	.forEach((arr) => {
		answer += `${arr[0]} ${arr[1]}\n`;
	});

console.log(answer);
