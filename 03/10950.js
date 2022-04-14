const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

let N = parseInt(input[0]);

for (let n = 0; n < N; n++) {
	const c = input[n + 1].split(' ');
	console.log(parseInt(c[0]) + parseInt(c[1]));
}
