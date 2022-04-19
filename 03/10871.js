const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

const num = input[0].split(' ');
const arr = input[1].split(' ');
const N = Number(num[0]);
const X = Number(num[1]);

let answer = '';
for (let i = 0; i < N; i++) {
	if (arr[i] < X) answer += arr[i] + ' ';
}
console.log(answer);
