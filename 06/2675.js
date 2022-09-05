const fs = require('fs');

//백준
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
//const input = fs.readFileSync('예제.txt').toString().split('\n');

let sum = 0;

for (let i = 0; i < input[0]; i++) {
	sum += parseInt(input[1].charAt(i));
}

console.log(sum);
