const fs = require('fs');

//백준
const input = fs.readFileSync('/dev/stdin').toString();
//VSCode
//const input = fs.readFileSync('예제.txt').toString();

let location = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
	if (location[input.charCodeAt(i) - 97] == -1) {
		location[input.charCodeAt(i) - 97] = i;
	}
}

console.log(location.join(' '));
