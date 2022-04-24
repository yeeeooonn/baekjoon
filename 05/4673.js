let check = Array(10001).fill(false);
let answer = '';

for (let i = 1; i < 10001; i++) {
	let n = d(i);
	if (n < 10001) {
		check[n] = true;
	}
}

for (let i = 1; i < 10001; i++) {
	if (!check[i]) answer += i + '\n';
}

function d(number) {
	let sum = number;
	while (number != 0) {
		sum = sum + (number % 10);
		number = Math.floor(number / 10);
	}
	return sum;
}

console.log(answer);
