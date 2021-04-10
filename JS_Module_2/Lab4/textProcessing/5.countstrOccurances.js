function main(sentence, word2Check) {
	let count = 0;
	let sentenceArray = sentence.split(" ");

	for (let i = 0; i < sentenceArray.length; i++) {
		let word = sentenceArray[i];
		if (word == word2Check) {
			count++;
		}
	}
	console.log(count);
}

main("This is a word and it also is a sentence", "is");
