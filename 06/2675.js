const fs = require('fs');

//백준
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
//const input = fs.readFileSync('예제.txt').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
	let str = input[i].split(' ');
	let answer = '';

	for (let j = 0; j < str[1].length; j++) {
		answer += str[1].charAt(j).repeat(str[0]);
	}

	console.log(answer);
}
