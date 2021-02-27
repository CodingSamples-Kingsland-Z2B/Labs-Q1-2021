function main(numItems, numArray) {
	let max = -Infinity;
	let min = Infinity;

	for (let i = 0; i < numItems; i++) {
		let currNum = numArray.shift();
		if (currNum < min) {
			min = currNum;
		}
		if (currNum > max) {
			max = currNum;
		}
	}
	console.log(`Min number: ${min}`);
	console.log(`Max number: ${max}`);
}

main(3, [-100, 10, 50]);
