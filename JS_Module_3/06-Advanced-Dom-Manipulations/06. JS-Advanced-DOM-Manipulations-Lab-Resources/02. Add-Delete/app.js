function addItem() {
    //access the list that you need to append to.
    let list = document.getElementById('items');
    //console.log(list);gets the ul and all the li inside of it
  
    //get the text input field so that we can append it
    let newItem = document.getElementById('newText');
    //console.log(newItem);
  
    //create the delete button
    let delLiBtn = document.createElement('button');
    delLiBtn.innerHTML = 'Delete'; // dot notation to enter the key and change the value of an object.
    delLiBtn.addEventListener('click', function(){
        list.removeChild(newLi);
    });

    //create a new li item and then set it's value so we can append it to the ul 
    let newLi = document.createElement('li');
    newLi.textContent = newItem.value;
    newLi.appendChild(delLiBtn);
    //console.log(newLi);
    
    //append to the ul and then clear the input text field
    list.appendChild(newLi);
    newItem.value = '';
  }