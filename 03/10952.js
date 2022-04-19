const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

let i = 0;
let answer = '';
while (true) {
	let num = input[i].split(' ');
	if (Number(num[0]) == 0 && Number(num[1]) == 0) break;
	else answer += Number(num[0]) + Number(num[1]) + '\n';
	i++;
}
console.log(answer);
