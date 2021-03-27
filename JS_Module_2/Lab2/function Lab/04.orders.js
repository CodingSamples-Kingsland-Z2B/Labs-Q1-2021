function main(product, quantity) {
	let output = orders(product, quantity);
	console.log(output.toFixed(2));
}

function orders(item, numOf) {
	let price = 0;
	switch (item) {
		case "coffee":
			price = 1.5;
			break;
		case "coke":
			price = 1.4;
			break;
		case "water":
			price = 1;
			break;
		case "snacks":
			price = 2;
			break;
	}

	return price * numOf;
}

main("water", 5);
