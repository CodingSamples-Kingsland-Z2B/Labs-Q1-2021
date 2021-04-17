function biscuitFactory(numBisc, workerCount, compFactory) {
	let biscuitsPerDay = numBisc * workerCount;
	let monthlyBiscuits = 0;
	for (let i = 0; i < 30; i++) {
		if ((i + 1) % 3 === 0) {
			monthlyBiscuits += Math.floor(biscuitsPerDay * 0.75);
		} else {
			monthlyBiscuits += Math.floor(biscuitsPerDay);
		}
	}

	if (monthlyBiscuits > compFactory) {
		let percentMore = ((monthlyBiscuits - compFactory) / compFactory) * 100;
		console.log(
			`You have produced ${monthlyBiscuits} biscuits for the past month.`
		);
		console.log(
			`You produce ${percentMore.toFixed(2)} percent more biscuits.`
		);
	} else {
		let percentLess = ((compFactory - monthlyBiscuits) / compFactory) * 100;
		console.log(
			`You have produced ${monthlyBiscuits} biscuits for the past month.`
		);
		console.log(
			`You produce ${percentLess.toFixed(2)} percent less biscuits.`
		);
	}
}
function main(perDay, workers, competition) {
	biscuitFactory(perDay, workers, competition);
}
main(78, 8, 16000);
