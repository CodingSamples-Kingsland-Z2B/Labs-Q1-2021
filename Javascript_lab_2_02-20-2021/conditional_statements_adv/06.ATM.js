// function main(balance, withdraw, limit) {
// 	if (balance >= withdraw && withdraw <= limit) {
// 		console.log("The withdrawal was successful.");
// 	} else if (withdraw > limit) {
// 		console.log("The limit was exceeded.");
// 	} else if (withdraw > balance) {
// 		console.log("Insufficient availability.");
// 	}
// }

function main(balance, withdraw, limit) {
	if (withdraw > limit) {
		console.log("The limit was exceeded.");
	} else if (withdraw > balance) {
		console.log("Insufficient availability.");
	} else {
		console.log("The withdrawal was successful.");
	}
}

main(420, 20, 25);

main(10, 55, 20);
