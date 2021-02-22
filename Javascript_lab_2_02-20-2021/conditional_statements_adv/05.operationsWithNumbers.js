function main(n1, n2, operator) {
	switch (operator) {
		case "+":
			console.log(`${n1} ${operator} ${n2} = ${n1 + n2}`);
			break;
		case "-":
			console.log(`${n1} ${operator} ${n2} = ${n1 - n2}`);
			break;
		case "*":
			console.log(`${n1} ${operator} ${n2} = ${n1 * n2}`);
			break;
		case "/":
			console.log(`${n1} ${operator} ${n2} = ${n1 / n2}`);
			break;
		case "%":
			console.log(`${n1} ${operator} ${n2} = ${n1 % n2}`);
			break;
	}
}

main(10, 12, "%");
