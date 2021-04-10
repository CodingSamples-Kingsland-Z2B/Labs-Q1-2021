function main(infoList) {
	let phoneBook = {};

	for (let i = 0; i < infoList.length; i++) {
		let [name, phoneNumber] = infoList[i].split(" ");

		phoneBook[name] = phoneNumber;
	}

	for (let key in phoneBook) {
		console.log(`${key} -> ${phoneBook[key]}`);
	}
}

main([
	"Tim 0834212554",
	"Peter 0877547887",
	"Bill 0896543112",
	"Tim 0876566344",
]);
