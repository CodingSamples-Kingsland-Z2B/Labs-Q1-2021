function main(arrayOfStrings) {
	let first = Number(arrayOfStrings[0]);
	let last = Number(arrayOfStrings[arrayOfStrings.length - 1]);

	console.log(first + last);
}

main(["10", "17", "22", "33"]);
