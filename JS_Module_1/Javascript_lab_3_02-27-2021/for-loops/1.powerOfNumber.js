function main(number, power) {
	let result = 1;
	//2 ^ 5 =>  2 * 2 * 2 * 2 * 2
	// power number of time => 5
	for (let i = 0; i < power; i++) {
		result = result * number; // * 2
		// result *= number;
	}

	console.log(result);
}
//main(2, 5); // 2^5 2 *2 *2 *2 *2
main(10, 3);
