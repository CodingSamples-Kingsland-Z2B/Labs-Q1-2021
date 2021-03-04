function main(magicNum) {
	for (let firstNum = 1; firstNum <= magicNum; firstNum++) {
		for (let secondNum = 1; secondNum <= magicNum; secondNum++) {
			for (let thirdNum = 1; thirdNum <= magicNum; thirdNum++) {
				if (firstNum * secondNum * thirdNum == magicNum) {
					console.log(`${firstNum}${secondNum}${thirdNum}`);
				}
			}
		}
	}
	//no numbers here
}

main(3);
console.log("-----");
main(8);
