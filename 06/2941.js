const fs = require('fs');

//백준
//let input = fs.readFileSync('/dev/stdin').toString().trim();
//VSCode
let input = fs.readFileSync('예제.txt').toString().trim();

const crot = {
	0: 'c=',
	1: 'c-',
	2: 'dz=',
	3: 'd-',
	4: 'lj',
	5: 'nj',
	6: 's=',
	7: 'z=',
};

for (let i = 0; i < 8; i++) {
	if (input.includes(crot[i])) {
		//크로아티아 알파벳을 포함하면 ?로 치환
		input = input.replaceAll(crot[i], '?');
	}
}

console.log(input);
console.log(input.length);
