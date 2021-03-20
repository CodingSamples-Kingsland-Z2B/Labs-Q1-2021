function main(letterCount, charArray) {
	let sum = 0;

	for (let i = 0; i < letterCount; i++) {
		let letter = charArray.shift();

		switch (letter) {
			case "a":
				sum += 1;
				break;

			case "e":
				sum += 2; // sum = sum + 2;
				break;
			case "i":
				sum += 3;
				break;
			case "o":
				sum += 4;
				break;
			case "u":
				sum += 5;
				break;
		} // break -> switch - for - while
		// if version (when using comment out the switch lines 7-24)
		// if (letter == "a") {
		// 	sum += 1;
		// } else if (letter == "e") {
		// 	sum += 2;
		// } else if(letter == "i"){
		//     sum += 3;
		// }else if (letter == "o"){
		//     sum += 4;
		// }else if (letter == "u"){
		//     sum += 5;
		// }
	}

	console.log(sum);
}
main(3, ["i", "x", "u"]);
