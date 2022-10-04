const fs = require('fs');

//백준
const [n, ...input] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');
//VSCode
//const [n, ...input] = fs.readFileSync('예제.txt').toString().trim().split('\n');

console.log(
	input
		.map((v) => ({ age: parseInt(v.split(' ')[0]), name: v.split(' ')[1] }))
		.sort((a, b) => a.age - b.age)
		.map((v) => String(v.age) + ' ' + v.name)
		.join('\n')
);
