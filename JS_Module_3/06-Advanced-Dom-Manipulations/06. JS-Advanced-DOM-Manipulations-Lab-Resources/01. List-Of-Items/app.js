console.log("its on");
function addItem() {
	let toDoList = document.getElementById("items");

	let newLi = document.createElement("li");
	let inputTODO = document.getElementById("newItemText").value;
	newLi.innerText = inputTODO;
	toDoList.appendChild(newLi);
}

let submitButton = document.getElementById("submitButton");
console.log(submitButton);
submitButton.addEventListener("keyup", function (event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		document.getElementById("submitButton").click();
	}
});
