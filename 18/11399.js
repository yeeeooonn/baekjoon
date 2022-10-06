const fs = require('fs');

//백준
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//VSCode
//const [n, input] = fs.readFileSync('예제.txt').toString().trim().split('\n');

const numbers = input.split(' ');
numbers.sort((a, b) => a - b);

let answer = 0;
let acc = 0;
for (let i = 0; i < n; i++) {
	acc += Number(numbers[i]);
	answer += acc;
}
console.log(answer);
