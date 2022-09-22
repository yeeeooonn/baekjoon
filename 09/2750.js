const fs = require('fs');

//백준;
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//VSCode
//let input = fs.readFileSync('예제.txt').toString().split('\n');

input.shift(); //배열 첫번째 요소 제거
input.sort((a, b) => a - b); //오름차순 정렬

console.log(input.join('\n'));
