const fs = require('fs');
//백준
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
//const input = fs.readFileSync('예제.txt').toString().split('\n');

let max = 0;
let place = 0;
for (let i = 0; i < input.length; i++) {
	if (Number(input[i]) > max) {
		max = Number(input[i]);
		place = i + 1;
	}
}
console.log(max + '\n' + place);
