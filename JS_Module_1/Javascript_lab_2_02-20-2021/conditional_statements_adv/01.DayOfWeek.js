function main(dayNum) {
	let dayName = "";

	switch (dayNum) {
		case 1:
			dayName = "Monday";
			break;
		case 2:
			dayName = "Tuesday";
			break;
		case 3:
			dayName = "Wednesday";
			break;
		case 4:
			dayName = "Thursday";
			break;
		case 5:
			dayName = "Friday";
			break;
		case 6:
			dayName = "Saturday";
			break;
		case 7:
			dayName = "Sunday";
			break;
		default:
			dayName = "Error";
			break;
	}
	console.log(dayName);
}

// main(1);

// main(3);

// main(5);

main(9);
