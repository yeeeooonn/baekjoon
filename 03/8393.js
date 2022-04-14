const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().trim();
//VSCode
const input = fs.readFileSync('예제.txt').toString().trim();
let sum = 0;
for (let i = 1; i <= parseInt(input); i++) {
	sum += i;
}
console.log(sum);
