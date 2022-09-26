const fs = require('fs');

//백준
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//VSCode
//const input = fs.readFileSync('예제.txt').toString().trim().split('\n');

let arr = input.map(Number);
const length = arr.shift();
arr.sort((a, b) => a - b);

//평균
let sum = arr.reduce((a, b) => a + b);
let avg = Math.round(sum / length) === -0 ? 0 : Math.round(sum / length);

//중앙값
const center = arr[Math.floor(length / 2)];

//최빈값
const map = new Map();
for (let i = 0; i < arr.length; i++) {
	if (!map.has(arr[i])) {
		map.set(arr[i], 1); //key, value 저장
	} else {
		map.set(arr[i], map.get(arr[i]) + 1); //get은 value를 불러옴
	}
}

let max = 0;
let arr2 = [];
map.forEach((ele, key) => {
	if (max < ele) {
		max = ele;
		arr2 = [];
		arr2.push(key);
	} else if (max === map.get(key)) {
		arr2.push(key);
	}
});
const mode = arr2.length !== 1 ? arr2[1] : arr2[0];

//범위
const range = arr[length - 1] - arr[0];

console.log(`${avg}\n${center}\n${mode}\n${range}`);
