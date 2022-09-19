const fs = require('fs');

//백준
const input = fs.readFileSync('/dev/stdin').toString();

//VSCode
//const input = fs.readFileSync('예제.txt').toString();

let max = 1;
let result = 1;

while (input > max) {
	max += 6 * result;
	result++;
}

console.log(result);
