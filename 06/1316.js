const fs = require('fs');

//백준
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//VSCode
//const input = fs.readFileSync('예제.txt').toString().split('\n');

let count = 0;

for (let i = 1; i <= input[0]; i++) {
	let check = 1; //그룹단어인지 체크

	let word = input[i];
	let prevWord = word[0];

	for (let j = 1; j < input[i].length; j++) {
		if (word[j] != prevWord && word.slice(j).includes(prevWord)) {
			check = 0;
			break;
		} else {
			prevWord = word[j];
		}
	}
	if (check == 1) count++;
}

console.log(count);
