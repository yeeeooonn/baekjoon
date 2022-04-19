const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString();
//VSCode
const input = fs.readFileSync('예제.txt').toString();

let N = Number(input);
let count = 0;

while (true) {
	N = (N % 10) * 10 + ((Math.floor(N / 10) + (N % 10)) % 10);
	count++;

	if (Number(input) == N) break;
}
console.log(count);
