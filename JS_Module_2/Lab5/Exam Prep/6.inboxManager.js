function main(commandsArray) {
	let inbox = new Map();

	for (
		let i = 0;
		i < commandsArray.length && commandsArray[i] != "Statistics";
		i++
	) {
		let [command, userName, email] = commandsArray[i].split("->");
		switch (command) {
			case "Add":
				if (inbox.has(userName)) {
					console.log(`${userName} is already registered`);
				} else {
					inbox.set(userName, []);
				}
				break;
			case "Send":
				let currEmails = inbox.get(userName);
				currEmails.push(email);
				inbox.set(userName, currEmails);
				break;
			case "Delete":
				if (inbox.has(userName)) {
					inbox.delete(userName);
				} else {
					console.log(`${userName} not found!`);
				}
				break;
		}
	}
	console.log(inbox);
	/*   [ 
            [
                "mike",
                [ 'Hello, do you want to meet up tomorrow?',  'Another random test mail']
            ], 
            [
                "george",
                [ 'Hello World', 'Some random test mail', 'It would be a pleasure' ]
            ]
          ]*/
	let sorted = Array.from(inbox.entries()).sort((a, b) => {
		if (a[1].length < b[1].length) {
			return 1;
		} else if (a[1].length > b[1].length) {
			return -1;
		} else {
			if (a[0] > b[0]) {
				return 1;
			} else if (a[0] < b[0]) {
				return -1;
			} else {
				return 0;
			}
		}
	});

	console.log(`Users count: ${sorted.length}`);
	for (let [user, emails] of sorted) {
		console.log(user);
		for (let email of emails) {
			console.log(` - ${email}`);
		}
	}
}

main([
	`Add->Mike`,
	`Add->George`,
	`Send->George->Hello World`,
	`Send->George->Some random test mail`,
	`Send->Mike->Hello, do you want to meet up tomorrow?`,
	`Send->George->It would be a pleasure`,
	`Send->Mike->Another random test mail`,

	`Statistics`,
]);

// main([
// 	`Add->Mike`,
// 	`Add->George`,
// 	`Send->George->Hello World`,
// 	`Send->George->Your loan is overdue`,
// 	`Add->Mike`,
// 	`Send->Mike->Hello, do you want to meet up tomorrow?`,
// 	`Delete->Peter`,
// 	`Send->George->I'm busy`,
// 	`Send->Mike->Another random test mail`,
// 	`Delete->George`,
// 	`Statistics`,
// ]);
