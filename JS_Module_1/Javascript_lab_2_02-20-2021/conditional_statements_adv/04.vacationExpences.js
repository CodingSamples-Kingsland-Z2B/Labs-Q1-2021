function main(season, acomType, numDays) {
	let totalPrice = 0;
	switch (season) {
		case "Spring":
			if (acomType == "Hotel") {
				totalPrice = numDays * 30;
				totalPrice = totalPrice * 0.8; //  equal to totalPrice - totalPrice * 0.2;
				// totalPrice *= .8
			} else {
				totalPrice = numDays * 10;
				totalPrice = totalPrice * 0.8; //  equal to totalPrice - totalPrice * 0.2;
			}
			break;
		case "Summer":
			if (acomType == "Hotel") {
				totalPrice = numDays * 50;
			} else {
				totalPrice = numDays * 30;
			}
			break;
		case "Autumn":
			if (acomType == "Hotel") {
				totalPrice = numDays * 20;
				totalPrice = totalPrice * 0.7;
			} else {
				totalPrice = numDays * 15;
				totalPrice = totalPrice * 0.7;
			}
			break;
		case "Winter":
			if (acomType == "Hotel") {
				totalPrice = numDays * 40;
				totalPrice = totalPrice * 0.9;
			} else {
				totalPrice = numDays * 10;
				totalPrice = totalPrice * 0.9;
			}
			break;
	}
	console.log(totalPrice.toFixed(2));
}

main("Winter", "Hotel", 5);
