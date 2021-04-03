function main(firstName, lastName, age) {
	let person = {
		firstName,
		lastName,
		age,
	};

	for (let property in person) {
		console.log(`${property}: ${person[property]}`);
	}
}

main("Peter", "Pan", "20");
