function main(name, area, population, country, postCode) {
	let city = {
		name,
		area,
		population,
		country,
		postCode,
	};

	for (let property in city) {
		console.log(`${property} -> ${city[property]}`);
	}
}

main("Atlanta", "343", "416474", "USA", "404");
