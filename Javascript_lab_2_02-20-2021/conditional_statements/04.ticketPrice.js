function main(ticketType) {
	if (ticketType === "student") {
		console.log("$1.60");
	} else if (ticketType == "regular") {
		console.log("$1.00");
	} else {
		console.log("Invalid ticket type!");
	}
}

main("student");
main("regular");
main("elf");
