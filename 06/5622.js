const fs = require('fs');

//백준
const input = fs.readFileSync('/dev/stdin').toString().trim();
//VSCode
//const input = fs.readFileSync('예제.txt').toString().trim();

const phone = {
	2: 'ABC',
	3: 'DEF',
	4: 'GHI',
	5: 'JKL',
	6: 'MNO',
	7: 'PQRS',
	8: 'TUV',
	9: 'WXYZ',
};

let count = 0;

for (let i = 0; i < input.length; i++) {
	for (let j = 2; j <= 9; j++) {
		if (phone[j].includes(input[i])) {
			count += j + 1;
			break;
		}
	}
}

console.log(count);
