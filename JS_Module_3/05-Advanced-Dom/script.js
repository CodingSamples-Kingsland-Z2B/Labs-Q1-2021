let h1Element = document.getElementsByTagName('h1')[0]; // Assigning a variable the value of a element from the browser

console.log(h1Element);
h1Element.innerHTML = "DOM Is So Cool!~";

// let secondLi = document.getElementsByTagName('li')[1];
// console.log("Second LI ", secondLi);

// let qSelector = document.querySelector('h1');
// console.log("Query Selector ", qSelector );

// secondLi.innerHTML +=  " - DONE";

// console.log("Second LI x2 ", secondLi);

let parent = document.getElementById('div1');
// let firstChild = document.getElementById('p1');
// let secondChild = document.getElementById('p2');

// console.log(parent,firstChild,secondChild);
// firstChild.remove();
// parent.removeChild(secondChild)

// let list = document.createElement("ul");
// let firstLi = document.createElement("li");
// firstLi.textContent = "Peter";
// list.appendChild(firstLi);
// let secondLi = document.createElement("li");
// secondLi.innerHTML = "<b>Maria</b>";
// list.appendChild(secondLi);
// document.body.appendChild(list);
// console.log(document);

let text = document.createElement('p');
let node = document.createTextNode('Node, This is a new paragraph ');
text.appendChild(node);
text.textContent = 'New text for element.';
// let someHTML = myElement.innerHTML;
// someHTML.innerHTML = 'New text for element.';
document.body.appendChild(text);
console.log(text.innerHTML)
const inputEle = document.getElementsByTagName('input')[0]; // Selecting the HTML DOM element.
let whatType = inputEle.getAttribute('type'); // text 
let whatType2  = inputEle.getAttribute('namesss'); // username
inputEle.setAttribute('newName', "3rd Attribute")
console.log(whatType, whatType2, inputEle);
const inputPassEle = document.getElementsByTagName('input')[1];
inputPassEle.setAttribute('placeholder', 'some val');
console.log(inputPassEle)
inputPassEle.removeAttribute('placeholder');
console.log(inputPassEle);
inputPassEle.setAttribute('name', 'password');
console.log(inputPassEle);

console.log(document.getElementById('myDiv').classList);
const someElement = document.getElementById('myDiv');
someElement.classList.add('testClass');
console.log(someElement);
someElement.classList.remove('testClass');
console.log(someElement);

let firstP = document.getElementsByTagName('p')[0];
console.log("The firstP is ", firstP)
console.log(firstP.parentNode.childNodes);

let ul = document.getElementById('myList'); 
let next = ul.children[0].nextElementSibling; 
console.log(next.textContent); // C#
let prev = next.previousElementSibling; 
console.log(prev.textContent); // JS

// JS 
// C#
// JAVA
// PHP

let ulList = document.createElement("ul")
let p = document.createElement("p");
let li = document.createElement("li");
someArray.map(eachArrayItem => {
  // make li item, insert content, append to list
});
// Put list on DOM / Web page. 
li.appendChild(p);
console.log(li)
ulList.appendChild(li);
console.log(ulList);