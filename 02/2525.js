const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');

//VSCode
const input = fs.readFileSync('예제.txt').toString().split('\n');

const time = input[0].split(' ');

const A = parseInt(time[0]);
const B = parseInt(time[1]);
const C = parseInt(input[1]);

if (B + C < 60) console.log(`${A} ${B + C}`);
else {
	let hour = A + Math.floor((B + C) / 60);
	if (hour >= 24) console.log(`${hour - 24} ${(B + C) % 60}`);
	else console.log(`${hour} ${(B + C) % 60}`);
}
