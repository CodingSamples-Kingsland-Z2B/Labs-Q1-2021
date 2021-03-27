function main(dayNum) {
	let days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];

	if (dayNum >= 1 && dayNum <= 7) {
		console.log(days[dayNum - 1]);
	} else {
		console.log("Invalid day!");
	}
}

main(3); //wednesday
