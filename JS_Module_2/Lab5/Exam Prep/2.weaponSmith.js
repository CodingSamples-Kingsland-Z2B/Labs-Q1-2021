function main(input) {
	let nameParticles = input.shift().split("|");
	for (let i = 0; i < input.length; i++) {
		let currentMove = input[i].split(" ");
		let moveIndex = null;
		//console.log(currentMove[1]);
		switch (currentMove[1]) {
			case "Left":
				// check to see if move is possible
				moveIndex = Number(currentMove[2]);
				if (nameParticles[moveIndex - 1]) {
					const tmp = nameParticles[moveIndex - 1];
					nameParticles[moveIndex - 1] = nameParticles[moveIndex];
					nameParticles[moveIndex] = tmp;
				}
				break;
			case "Right":
				moveIndex = Number(currentMove[2]);
				if (nameParticles[moveIndex + 1]) {
					const tmp = nameParticles[moveIndex + 1];
					nameParticles[moveIndex + 1] = nameParticles[moveIndex];
					nameParticles[moveIndex] = tmp;
				}
				// code block
				break;
			case "Odd":
				let oddArray = [];
				for (let index in nameParticles) {
					if (index % 2 != 0) {
						oddArray.push(nameParticles[index]);
					}
				}
				console.log(oddArray.join(" "));
				// code block
				break;
			case "Even":
				let evenArray = [];
				for (let index in nameParticles) {
					if (index % 2 == 0) {
						evenArray.push(nameParticles[index]);
					}
				}
				console.log(evenArray.join(" "));
				// code block
				break;
			case undefined:
				//console.log("undefined");
				// code block
				break;
			default:
			// code block
		}
	}
	console.log(`You crafted ${nameParticles.join("")}!`);
	//console.log(nameParticles, input);
}
main([
	"ha|Do|mm|om|er",
	"Move Right 0",
	"Move Left 3",
	"Check Odd",
	"Move Left 2",
	"Move Left 10",
	"Move Left 0",
	"Done",
]);
