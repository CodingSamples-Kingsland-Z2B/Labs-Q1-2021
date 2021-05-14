console.log("The JavaScript is working!");
console.log("The document is ", document)

// Create and h1 tag
// Put some text in the h1 tag
// Add it to the document

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = "We love DOM!";

let mainDIV = document.createElement('div');
document.body.prepend(mainDIV);
let divWeJustMade = document.getElementsByTagName('div')[0];
console.log("Div we just made", divWeJustMade);
divWeJustMade.appendChild(h1Tag);
let pageTitle = document.getElementById('page_title'); // reached into the document, made a variable from the page title
console.log('The page title is ', pageTitle);
pageTitle.textContent = "Whatever you want it to equal";
//alert("Warning I have your computer!");
//console.log(navigator.geolocation, navigator.language);
console.log(window, navigator)
//console.log(screen.width + ' x ' + screen.height);

// Event Listeners
let chromeH1Tag = document.getElementsByTagName('h1')[0];
chromeH1Tag.addEventListener('click', makeRed);
h1Tag.addEventListener("click", makeRed);


function helloClicked() { 
  console.log("Hello clicked!");
}

function makeRed() {
  this.style.color = "red";
}




