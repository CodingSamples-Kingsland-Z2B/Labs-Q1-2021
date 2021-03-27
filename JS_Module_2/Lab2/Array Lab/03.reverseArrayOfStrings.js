function main(arrOfStrings) {
	for (let i = 0; i < arrOfStrings.length / 2; i++) {
		// let temp = a;
		// a = b;
		// b = temp;

		let temp = arrOfStrings[i];
		arrOfStrings[i] = arrOfStrings[arrOfStrings.length - 1 - i];
		arrOfStrings[arrOfStrings.length - 1 - i] = temp;
	}

	console.log(arrOfStrings.join(" "));
}

main(["abc", "def", "hig", "klm", "nop"]);
