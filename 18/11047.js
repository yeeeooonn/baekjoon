const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

const numbers = input[0].split(' ');
let N = Number(numbers[0]);
let K = Number(numbers[1]);
const coin = [];

for (let i = 0; i < N; i++) {
	coin[i] = Number(input[i + 1]);
}

let count = 0;

for (let i = N - 1; i >= 0; i--) {
	if (coin[i] <= K) {
		count += Math.floor(K / coin[i]);
		K = K % coin[i];
	}
}

console.log(count);
