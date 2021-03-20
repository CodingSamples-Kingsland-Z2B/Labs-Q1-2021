function main(correctBook, bookList) {
	while (true) {
		let currentBook = bookList.shift();
		if (currentBook == undefined) {
			break;
		} else if (currentBook == correctBook) {
			console.log("Book found!");
			break;
		} else {
			console.log(`Invalid book: ${currentBook}`);
		}
	}
}

// function main(correctBook, bookList) {
// 	let currentBook = bookList.shift();
// 	while (currentBook != correctBook && currentBook != undefined) {
// 		console.log(`Invalid book: ${currentBook}`);
// 		currentBook = bookList.shift();
// 	}
// 	if (currentBook == correctBook) {
// 		console.log("Book found!");
// 	}
// }

main("Alice in Wonderland", ["Winnie the Pooh", "Alice in Wonderland"]);
