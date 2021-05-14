let newDiv = document.createElement('div');
newDiv.classList.add('main');
console.log(newDiv)
document.body.prepend(newDiv);
let pageHeader = document.createElement('h1');
pageHeader.textContent = "Welcome to Our DOM Tree Page!";
//newDiv.appendChild(pageHeader);
let newDOMDiv = document.getElementsByClassName('main')[0];
 newDOMDiv.appendChild(pageHeader);

pageHeader.addEventListener('click', function() { console.log('Hello click!')})
pageHeader.addEventListener('mouseover', makeRed)

function makeRed () {
  console.log("this is ", this)
  this.style.color = "red";
}