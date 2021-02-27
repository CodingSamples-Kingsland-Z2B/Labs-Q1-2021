function main(numItem, numsArray) {
	let sum = 0;
	for (let i = 1; i <= numItem; i++) {
		let currNumber = numsArray.shift();
		if (i % 2 == 0) {
			// even
			sum -= currNumber;
		} else {
			//odd
			sum += currNumber;
		}
	}
	console.log(sum);
}

//main(2, [10, -20]);
// add 10  subtract(-20) == +20 ==> 30
main(3, [10, 20, 5]);
