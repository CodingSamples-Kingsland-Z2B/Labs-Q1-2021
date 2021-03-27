function repeatString(inputstring, numOfrepeat) {
	let output = inputstring.repeat(numOfrepeat);

	return output;
}

function main(string, num) {
	console.log(repeatString(string, num));
}

main("abc", 3);
