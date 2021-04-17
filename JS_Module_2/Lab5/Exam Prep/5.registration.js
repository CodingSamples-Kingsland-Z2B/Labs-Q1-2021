function main(usersArray) {
	let regex = /(U\$)(?<userName>[A-Z][a-z]{3,})(\1)(P@\$)(?<pass>[A-z]{5,}\d+)(\4)/g;
	let numOfSignUps = usersArray.shift();
	let numOfsuccefulReg = 0;
	for (let i = 0; i < numOfSignUps; i++) {
		let validUser = regex.exec(usersArray[i]);
		if (validUser != null) {
			numOfsuccefulReg++;
			let userName = validUser.groups["userName"];
			let password = validUser.groups["pass"];
			console.log("Registration was successful");
			console.log(`Username: ${userName}, Password: ${password}`);
		} else {
			console.log("Invalid username or password");
		}
	}
	console.log(`Successful registrations: ${numOfsuccefulReg}`);
}

main([
	3,
	`U$MichaelU$P@$asdqwe123P@$`,
	`U$NameU$P@$PasswordP@$`,
	`U$UserU$P@$ad2P@$`,
]);
