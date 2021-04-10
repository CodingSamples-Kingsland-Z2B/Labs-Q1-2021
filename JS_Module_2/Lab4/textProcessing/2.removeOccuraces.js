function main(subString, inputString) {
	while (inputString.includes(subString)) {
		inputString = inputString.replace(subString, "");
	}

	console.log(inputString);
}
main("ice", "kicegiciceeb");
