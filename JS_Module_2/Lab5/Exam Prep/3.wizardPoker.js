//Wizard Poker
function main(cardsArray) {
	let validCards = cardsArray.shift().split(":");
	let newCardDeck = [];
	// console.log(validCards);
	for (let command of cardsArray) {
		let currentCommand = command.split(" ");
		// console.log(currentCommand[0]);
		switch (currentCommand[0]) {
			case "Add":
				if (validCards.includes(currentCommand[1])) {
					newCardDeck.push(currentCommand[1]);
				} else {
					console.log(`Card not found.`);
				}
				// console.log(newCardDeck);
				break;
			case "Insert":
				if (
					!validCards.includes(currentCommand[1]) ||
					Number(currentCommand[2]) > newCardDeck.length
				) {
					console.log(`Error!`);
				} else {
					newCardDeck.splice(
						Number(currentCommand[2]),
						0,
						currentCommand[1]
					);
				}
				break;
			// case 'Swap':
			// const tmp = currentCommand[1];
			//     nameParts[numMoves - 1] = nameParts[numMoves];
			//     nameParts[numMoves] = tmp;
			// break;
			case "Swap":
				let firstCardIndex = newCardDeck.indexOf(currentCommand[1]);
				let secondCardIndex = newCardDeck.indexOf(currentCommand[2]);
				let firstCard = newCardDeck[firstCardIndex];
				newCardDeck[firstCardIndex] = newCardDeck[secondCardIndex];
				newCardDeck[secondCardIndex] = firstCard;
				break;
			case "Remove":
				if (!newCardDeck.includes(currentCommand[1])) {
					console.log("Card not found.");
				} else {
					let deleteCard = newCardDeck.indexOf(currentCommand[1]);
					newCardDeck.splice(deleteCard, 1);
				}
				break;
			case "Shuffle":
				newCardDeck.reverse();
				break;
			case "Ready":
				break;
		}
	}
	console.log(newCardDeck.join(" "));
}
main([
	`Innervate:Moonfire:Pounce:Claw:Wrath:Bite`,
	`Add Moonfire`,
	`Add Pounce`,
	`Add Bite`,
	`Add Wrath`,
	`Insert Claw 0`,
	`Swap Claw Moonfire`,
	`Remove Bite`,
	`Shuffle deck`,
	`Ready`,
]);
