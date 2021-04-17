// function main(testPhoneNumbers) {
// 	let regex = /\+404([ -])[0-9]{3}(\1)[0-9]{4}\b/g;

// 	let validNumberArray = [];
// 	let validNumber = regex.exec(testPhoneNumbers);
// 	while (validNumber != null) {
// 		validNumberArray.push(validNumber[0]);
// 		validNumber = regex.exec(testPhoneNumbers);
// 	}

// 	console.log(validNumberArray.join(", "));
// }

function main(numbers) {
	const regex = /\+404([ -])[0-9]{3}(\1)[0-9]{4}\b/g;

	let validNumbers = [];
	let validNumber;
	while ((validNumber = regex.exec(numbers)) !== null) {
		validNumbers.push(validNumber[0]);
	}

	console.log(validNumbers.join(", "));
}

main(
	"+404 222 2222,404-222-2222, +404/222/2222, +404-222 2222 +404 222-2222, +404-222-222, +404-222-22222 +404-222-2222"
);
