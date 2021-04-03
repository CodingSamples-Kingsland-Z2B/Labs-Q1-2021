function main(productsArr) {
	let sortedProducts = productsArr.sort();

	for (let index in sortedProducts) {
		console.log(`${Number(index) + 1}.${sortedProducts[index]}`);
	}
}

main(["Potatoes", "Tomatoes", "Onions", "Apples"]);
