const fs = require('fs');

//백준
const [n, ...words] = fs
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');
//VSCode
//const [n, ...words] = fs.readFileSync('예제.txt').toString().trim().split('\n');

Array.from(new Set(words)) //중복제거 후 배열로 만듬
	.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0)) //사전순으로 배열
	.sort((a, b) => a.length - b.length) //길이순으로 배열
	.forEach((i) => console.log(i));
