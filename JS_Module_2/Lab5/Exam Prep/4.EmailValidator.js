function main(commandsArray) {
	let email = commandsArray.shift();

	let command = commandsArray.shift();
	while (command != `Complete`) {
		let [direction, item] = command.split(" ");

		switch (direction) {
			case "Make":
				//if-else upper/lower
				if (item == "Upper") {
					email = email.toUpperCase();
				} else {
					email = email.toLowerCase();
				}
				console.log(email);
				break;
			case "GetDomain":
				//getdomain stuff
				let domain = email.substring(email.length - item);
				console.log(domain);
				break;
			case "GetUsername":
				//get user name stuff

				if (email.indexOf("@") != -1) {
					let index = email.indexOf("@");
					let userName = email.substring(0, index);
					console.log(userName);
				} else {
					console.log(
						`The email ${email} doesn't contain the @ symbol.`
					);
				}
				break;
			case "Replace":
				//replace a char with a -
				email = replace(item, email);
				console.log(email);
				break;
			case "Encrypt":
				//change to ascii
				encrypt(email);
				break;
		}
		command = commandsArray.shift();
	}
}

function replace(char, string) {
	while (string.includes(char)) {
		string = string.replace(char, "-");
	}
	return string;
}

function encrypt(string) {
	let charValArray = [];
	for (let char of string) {
		let asciiVal = char.charCodeAt(0);
		charValArray.push(asciiVal);
	}
	console.log(charValArray.join(" "));
}

main([
	`Mike123@somemail.com`,
	`Make Upper`,
	`GetDomain 3`,
	`GetUsername`,
	`Encrypt`,
	`Complete`,
]);
