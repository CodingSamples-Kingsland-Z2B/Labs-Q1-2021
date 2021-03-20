function main(lowerNum, heigherNum) {
	for (let i = lowerNum; i <= heigherNum; i++) {
		let isPrime = true;
		for (let j = 2; j < i; j++) {
			// 20 1 20
			if (i % j == 0) {
				isPrime = false;
				break; // switch for while
			}
		}
		if (isPrime) {
			console.log(i);
		}
	}
}
main(20, 30);
