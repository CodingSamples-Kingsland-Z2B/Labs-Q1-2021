function main(max) {
	for (let i = 1; i <= max; i++) {
		//let numString = i.toString();
		let sum = 0;
		// for (let j = 0; j < numString.length; j++) {
		// 	// 10 "10"
		// 	sum += Number(numString[j]);
		// }

		for (let j = i; j > 0; j = Math.floor(j / 10)) {
			sum += j % 10;
		}
		// 15
		if (sum == 5 || sum == 7 || sum == 11) {
			console.log(`${i} -> True`);
		} else {
			console.log(`${i} -> False`);
		}
	}
}
main(15);
