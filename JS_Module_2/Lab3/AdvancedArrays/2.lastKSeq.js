function main(numOfElements, lookBackNum) {
	let sequnce = [1];

	for (let i = 1; i < numOfElements; i++) {
		let start = Math.max(0, i - lookBackNum);

		let sum = 0;
		for (let j = start; j < sequnce.length; j++) {
			sum += sequnce[j];
		}
		sequnce.push(sum);
		//sequence => [1,1,2,4]
	}
	console.log(sequnce.join(" "));
}

main(10, 2);
