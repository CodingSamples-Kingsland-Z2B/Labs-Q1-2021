function main(neighborInfo) {
	let neighborhoodMap = new Map();

	let neighborhoodNames = neighborInfo.shift().split(", ");
	for (let hood of neighborhoodNames) {
		neighborhoodMap.set(hood, []);
	}

	for (let index in neighborInfo) {
		let [hoodName, inhabitant] = neighborInfo[index].split(" - ");
		//let neighborStuff
		// let hoodName = neighborStuff[0];
		// let inhabitant = neighborStuff[1];
		if (neighborhoodMap.has(hoodName)) {
			let neighborsArray = neighborhoodMap.get(hoodName);
			neighborsArray.push(inhabitant);
		}
	}

	let sorted = Array.from(neighborhoodMap).sort(
		(neighborhoodA, neighborhoodB) => {
			return neighborhoodB[1].length - neighborhoodA[1].length;
		}
	);

	for (let [hoodName, neighbors] of sorted) {
		console.log(`${hoodName}: ${neighbors.length}`);
		for (let person of neighbors) {
			console.log(`--${person}`);
		}
	}
}
main([
	"Abbey Street, Herald Street, Bright Mews",
	"Bright Mews - Garry",
	"Bright Mews - Andrea",
	"Invalid Street - Tommy",
	"Abbey Street - Billy",
]);
