function main(sentence, cencoredWord) {
	while (sentence.includes(cencoredWord)) {
		sentence = sentence.replace(
			cencoredWord,
			repeatStars(cencoredWord.length)
		);
	}

	console.log(sentence);
}
function repeatStars(length) {
	return "*".repeat(length);
}
main("A small sentence with some words", "small");
