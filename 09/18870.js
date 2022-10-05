const fs = require('fs');

//백준
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//VSCode
//let input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const n = Number(input.shift());
let arr = input[0].split(' ').map((x) => +x);

let set = new Set(arr);
let uniq = [...set].sort((a, b) => a - b);

let dic = {};
uniq.forEach((e, index) => {
	dic[e] = index;
});

let answer = '';
for (let i = 0; i < arr.length; i++) {
	answer += dic[arr[i]] + ' ';
}

console.log(answer);
