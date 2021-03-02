function main(inputNum) {
	let sum = 0;
	inputNum = Math.abs(inputNum);
	while (inputNum != 0) {
		sum += inputNum % 10; // 4 +
		// 5634 => 563 => 56 => 5 => 0
		inputNum = Math.floor(inputNum / 10); // pasrseInt() -- Math.trunc()
	}
	console.log(sum);
}
main(5634);
