function deleteByEmail() {
  let emailToDelete = document.getElementsByName('email')[0]; // capture the entire input
  console.log("The email to delete is ", emailToDelete);
  let results = document.getElementById('result'); // Div to update after search / delete
  let theRows = document.getElementsByTagName('tr'); // select all the DOM table rows
  //console.log(theRows);

  for (i = 0; i < theRows.length; i++) {
    console.log(theRows[i].cells[1].innerHTML);
    let emailToCheck = theRows[i].cells[1].innerHTML; // grabbing the emails from the table and labeling
    if (emailToCheck == emailToDelete.value) {
      console.log("Match!");
      document.getElementById('customers').deleteRow(i);
      results.innerHTML = "Deleted!"
      break;
    } else {
      console.log("No matches!");
      results.textContent = "Not found!"
    }
  }
  emailToDelete.value = "";
}
