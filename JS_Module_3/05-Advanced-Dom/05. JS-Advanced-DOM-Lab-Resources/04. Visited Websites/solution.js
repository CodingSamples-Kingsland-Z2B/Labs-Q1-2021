function solve() {
  //let myCounter = 1
  let divLinksArray = document.getElementsByClassName('link-1');
  let divLink = divLinksArray[0];
  //console.log(divLink);

  for (eachElement of divLinksArray) {
    console.log("each array is ", eachElement);
    eachElement.addEventListener("click", iWasClicked);
  }

  function iWasClicked() {
    console.log("The button was clicked!", this);

    // Run loops, methods, make variables all the normal JS
  }
  // divLink.addEventListener("click", function() { 

  //   // I am a function that will execute when the action above happens. 
  //   // The action is click, I'm attached to the first div

  //   let divLinkPTag = divLinksArray[0].children[1];
  //   divLinkPTag.textContent = `visited ${myCounter} times`
  //   myCounter++;
  //   console.log("Function ran the count is ", myCounter)
  // });
  
}