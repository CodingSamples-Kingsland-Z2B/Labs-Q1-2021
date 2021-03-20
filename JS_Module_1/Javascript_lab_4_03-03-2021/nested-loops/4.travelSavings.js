function main(destCollArray) {
	let currentDest = destCollArray.shift();
	while (currentDest != "End" && currentDest != undefined) {
		let budget = destCollArray.shift();
		let totalCollected = destCollArray.shift();
		console.log(`Collected: ${totalCollected}`);
		while (totalCollected < budget) {
			totalCollected += destCollArray.shift();
			console.log(`Collected: ${totalCollected}`);
		}
		console.log(`Going to ${currentDest}!`);
		currentDest = destCollArray.shift();
	}
}

/* while (true) {
    let donation = destCollArray.shift();
    totalCollected += donation;
    console.log(`Collected: ${totalCollected}`);
    if (totalCollected >= budget) {
        console.log(`Going to ${currentDest}!`);
        break;
    }
}
 */

main(["Bali", 3500, 800, 1800, 1000, "Brazil", 4600, 5000, "End"]);
