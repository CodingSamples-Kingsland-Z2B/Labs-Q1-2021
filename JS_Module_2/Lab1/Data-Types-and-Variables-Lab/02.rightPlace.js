function main(missingChar, inputChar, solutionString) {
	let fixedWord = missingChar.replace("_", inputChar);

	if (fixedWord == solutionString) {
		console.log("Matched");
	} else {
		console.log("Not Matched");
	}
}

main("Str_ng", "i", "String");
