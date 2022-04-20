const fs = require('fs');
//백준
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//VSCode
//const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let numbers = [];

input.forEach((x) => {
	const num = x % 42;

	if (numbers.indexOf(num) === -1) {
		numbers.push(num);
	}
});

console.log(numbers.length);
