function main(happyNum) {
	let output = "";
	for (let n1 = 1; n1 <= happyNum; n1++) {
		for (let n2 = 0; n2 <= happyNum; n2++) {
			for (let n3 = 0; n3 <= happyNum; n3++) {
				for (let n4 = 0; n4 <= happyNum; n4++) {
					if (n1 + n2 == n3 + n4 && n1 + n2 == happyNum) {
						output += `${n1}${n2}${n3}${n4} `;
					}
				}
			}
		}
	}
	console.log(output);
}

main(3);
