function main(n1, n2, n3) {
	let output = wrongRes(n1, n2, n3);
	console.log(output);
}

function wrongRes(numOne, numTwo, numThree) {
	let numOfneg = 0;
	if (numOne == 0 || numTwo == 0 || numThree == 0) {
		return "Positive";
	}

	if (numOne < 0) {
		numOfneg++;
	}
	if (numThree < 0) {
		numOfneg++;
	}
	if (numTwo < 0) {
		numOfneg++;
	}

	if (numOfneg % 2 == 0) {
		return "Positive";
	} else {
		return "Negative";
	}
}
main(5, 12, -15);
