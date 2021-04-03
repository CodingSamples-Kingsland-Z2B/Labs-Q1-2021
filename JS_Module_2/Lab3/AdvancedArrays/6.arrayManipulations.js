function main(arrayOfCommands) {
	let arrayOfNums = arrayOfCommands.shift().split(" ");
	arrayOfNums = arrayOfNums.map(Number); //(num)=> Number(num)
	// console.log(arrayOfNums);
	/* 
    •	Add {number}: add a number to the end of the array
    •	Remove {number}: remove number from the array
    •	RemoveAt {index}: removes number at a given index
    •	Insert {number} {index}: inserts a number at a given index
        output-> final version of array seperated by a space
    */
	for (let i = 0; i < arrayOfCommands.length; i++) {
		let [command, num1, num2] = arrayOfCommands[i].split(" "); // command = "add", num1 = "3"
		num1 = Number(num1);
		num2 = Number(num2);

		if (command == "Add") {
			//
			arrayOfNums.push(num1);
		} else if (command == "Remove") {
			arrayOfNums = arrayOfNums.filter((num) => {
				return num != num1;
			});
		} else if (command == "RemoveAt") {
			//RemoveAt {index}: removes number at a given index
			arrayOfNums.splice(num1, 1);
		} else if (command == "Insert") {
			arrayOfNums.splice(num2, 0, num1);
		}
		/* 
        let commandArray = arrayOfCommands[i].split(" "); //["add","3"]
        commandArray[1] = Number(commandArray[1]);
		 commandArray[2] = Number(commandArray[1]);
		if (commandArray[0] == "Add") {
			//
			arrayOfNums.push(commandArray[1]);
		} else if (commandArray[0] == "Remove") {
			arrayOfNums = arrayOfNums.filter((num) => {
				return num != commandArray[1];
			});
		} else if (commandArray[0] == "RemoveAt") {
			//RemoveAt {index}: removes number at a given index
			arrayOfNums.splice(commandArray[1], 1);
		} else if (commandArray[0] == "Insert") {
			arrayOfNums.splice(commandArray[2], 0, commandArray[1]);
		} */
	}
	console.log(arrayOfNums.join(" "));
}
//"4 19 2 53 6 43" ->  ["4", "19", '2', "53" ,'6', '43']
main(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
