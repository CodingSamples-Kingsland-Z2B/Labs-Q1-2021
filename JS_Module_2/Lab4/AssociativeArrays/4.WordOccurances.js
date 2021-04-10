function main(wordArray) {
	let wordOccance = new Map();

	for (let i = 0; i < wordArray.length; i++) {
		let word = wordArray[i];

		if (wordOccance.has(word)) {
			let numOfoccurances = wordOccance.get(word);
			numOfoccurances++;
			wordOccance.set(word, numOfoccurances);
		} else {
			wordOccance.set(word, 1);
		}
	}

	let sorted = Array.from(wordOccance).sort((wordA, wordB) => {
		return wordB[1] - wordA[1];
	});

	for (let [word, timesSeen] of sorted) {
		console.log(`${word} -> ${timesSeen} times`);
	}
}

main([
	"Here",
	"is",
	"the",
	"first",
	"sentence",
	"Here",
	"is",
	"another",
	"sentence",
	"And",
	"finally",
	"the",
	"third",
	"sentence",
]);
