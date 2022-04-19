const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

for (let i = 0; i < input.length - 1; i++) {
	let num = input[i].split(' ');
	console.log(Number(num[0]) + Number(num[1]));
}
