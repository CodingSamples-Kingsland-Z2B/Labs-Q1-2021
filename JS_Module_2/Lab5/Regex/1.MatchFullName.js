function main(testString) {
	let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;

	let validNameArray = [];
	let validName = regex.exec(testString);
	while (validName != null) {
		validNameArray.push(validName[0]);
		validName = regex.exec(testString);
	}

	console.log(validNameArray.join(" "));
}

main(
	"Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov"
);
