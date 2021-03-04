function main(inputNum) {
	let output = "";
	for (let evenNumb = 2; evenNumb <= inputNum; evenNumb += 2) {
		for (let oddNum = 1; oddNum <= inputNum; oddNum += 2) {
			//output += ""+evenNumb + oddNum + (evenNumb*oddNum);
			output += `${evenNumb}${oddNum}${evenNumb * oddNum} `;
		}
	}
	console.log(output);
}

main(5);

// input number
//5
//1st num. even numbers 2 - input number
// 2 - 4

//2nd num. odd number between 1 and - in put number
// 1- 5

//3rd number. is a product pf the first 2 numbers

// 212   236  2510  414  4312  4520
