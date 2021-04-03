function main(jsonString) {
	let person = JSON.parse(jsonString);

	for (let property in person) {
		console.log(`${property}: ${person[property]}`);
	}
}
main('{"name": "George", "age": 40, "town": "Atlanta"}');
