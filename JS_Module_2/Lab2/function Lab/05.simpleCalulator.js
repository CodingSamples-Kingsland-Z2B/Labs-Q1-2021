function main(n1, n2, op) {
	console.log(calulator(n1, n2, op));
}

function calulator(numOne, numTwo, operator) {
	if (operator == "multiply") {
		let mul = (a, b) => a * b;
		return mul(numOne, numTwo);
	} else if (operator == "divide") {
		return numOne / numTwo;
	} else if (operator == "add") {
		let sum = numOne + numTwo;
		return sum;
	} else if (operator == "subtract") {
		let sub = (a, b) => a - b;
		return sub(numOne, numTwo);
	}
}

main(5, 5, "multiply");
