function main(deliveries) {
	let storage = new Map();

	for (let i = 0; i < deliveries.length; i++) {
		let [product, amount] = deliveries[i].split(" ");
		amount = Number(amount);

		if (storage.has(product)) {
			let currAmount = storage.get(product);
			let newAmout = currAmount + amount;
			storage.set(product, newAmout);
		} else {
			storage.set(product, amount);
		}
	}

	for (let keyValP of storage) {
		console.log(`${keyValP[0]} -> ${keyValP[1]}`);
	}
}
main(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
