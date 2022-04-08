const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().split(' ');

//VSCode
const input = fs.readFileSync('예제.txt').toString().split(' ');

let hour = parseInt(input[0]);
let min = parseInt(input[1]);

if (min >= 45) console.log(`${hour} ${min - 45}`);
else if (hour == 0) console.log(`23 ${min + 15}`);
else console.log(`${hour - 1} ${min + 15}`);
