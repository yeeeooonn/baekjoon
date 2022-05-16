const fs = require('fs');
//백준
//const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//VSCode
const [N, ...input] = fs.readFileSync('예제.txt').toString().trim().split('\n');

const times = input
	.map((num) => num.split(' ').map((v) => +v))
	.sort((a, b) => {
		if (a[1] == b[1]) {
			return a[0] - b[0];
		} else {
			return a[1] - b[1];
		}
	});

let count = 0;
let endTime = 0;
times.forEach((time) => {
	if (time[0] >= endTime) {
		count++;
		endTime = time[1];
	}
});

console.log(count);
