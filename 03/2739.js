const fs = require('fs');

//백준
//const input = fs.readFileSync('/dev/stdin').toString().trim();
//VSCode
const input = fs.readFileSync('예제.txt').toString().trim();

let num = parseInt(input);

for (let n = 1; n < 10; n++) {
	console.log(`${num} * ${n} = ${num * n}`);
}
