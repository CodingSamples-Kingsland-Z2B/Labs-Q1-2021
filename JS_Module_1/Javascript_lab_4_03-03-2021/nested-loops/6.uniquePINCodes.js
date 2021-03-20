function main(max1, max2, max3) {
	for (let n1 = 2; n1 <= max1; n1 += 2) {
		for (let n2 = 2; n2 <= max2; n2++) {
			for (let n3 = 2; n3 <= max3; n3 += 2) {
				if (n2 == 2 || n2 == 3 || n2 == 5 || n2 == 7) {
					console.log(`${n1}${n2}${n3}`);
				}
			}
		}
	}
}

main(3, 5, 5);
