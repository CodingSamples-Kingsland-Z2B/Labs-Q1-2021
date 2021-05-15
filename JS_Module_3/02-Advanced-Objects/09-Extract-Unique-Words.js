function main(arrayOfStrings) {
	let uniqueWords = [];
	for (let i = 0; i < arrayOfStrings.length; i++) {
		let strings = arrayOfStrings[i].split(" ");
    console.log("String array is ", strings)
		for (let j = 0; j < strings.length; j++) {
			if (uniqueWords.includes(strings[j])) {
			} else {
				uniqueWords.push(strings[j]);
			}
		}
	}
	console.log(uniqueWords);
}

main(["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Pellentesque quis hendrerit dui.", "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.", "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.", "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.", "Morbi in ipsum varius, pharetra diam vel, mattis arcu.", "Integer ac turpis commodo, varius nulla sed, elementum lectus.", "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."])