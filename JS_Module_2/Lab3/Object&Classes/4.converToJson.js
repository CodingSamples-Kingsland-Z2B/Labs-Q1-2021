function main(firstName, lastName, hairColor) {
	let person = {
		firstName,
		lastName,
		hairColor,
	};
	let json = JSON.stringify(person);
	console.log(json);
}

main("George", "Jones", "Brown");
