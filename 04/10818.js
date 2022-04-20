const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

const numbers = input[1].split(' ');

let max = -1000001;
let min = 1000001;
for (let i = 0; i < Number(input[0]); i++) {
	if (Number(numbers[i]) > max) max = numbers[i];
	if (Number(numbers[i]) < min) min = numbers[i];
}
console.log(`${min} ${max}`);
