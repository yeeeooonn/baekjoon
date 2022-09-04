const fs = require('fs');
//백준
const input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();
//VSCode
//const input = fs.readFileSync('예제.txt').toString().trim().toUpperCase();

let count = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
	count[input[i].charCodeAt() - 65]++;
}

let maxnum = -1;
let ch = '?';

for (let i = 0; i < count.length; i++) {
	if (maxnum < count[i]) {
		maxnum = count[i];
		ch = String.fromCharCode(i + 65);
	} else if (maxnum === count[i]) {
		ch = '?';
	}
}

console.log(ch);
