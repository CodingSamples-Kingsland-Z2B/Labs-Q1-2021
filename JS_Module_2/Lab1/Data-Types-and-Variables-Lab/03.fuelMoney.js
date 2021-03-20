function main(distance, numOfPass, priceOfGas) {
	let fuelNeeded = (distance / 100) * 7;
	fuelNeeded += numOfPass * 0.1;
	let totalFuelCost = fuelNeeded * priceOfGas;
	console.log(`Needed money for that trip is ${totalFuelCost}lv.`);
}

main(260, 9, 2.49);
