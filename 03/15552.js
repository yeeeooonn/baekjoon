const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

let answer = '';

for (let n = 0; n < input[0]; n++) {
	let c = input[n + 1].split(' ');
	answer += parseInt(c[0]) + parseInt(c[1]) + '\n';
}
console.log(answer);
