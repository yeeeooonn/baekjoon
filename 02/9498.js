const fs = require('fs');
//백준
//const input = fs.readFileSync('/dev/stdin').toString().trim();

//VSCode
const input = fs.readFileSync('예제.txt').toString().trim();

if (input >= 90) console.log('A');
else if (input >= 80) console.log('B');
else if (input >= 70) console.log('C');
else if (input >= 60) console.log('D');
else console.log('F');
