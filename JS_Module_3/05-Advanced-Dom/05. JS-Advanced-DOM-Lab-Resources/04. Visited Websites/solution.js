function solve() {
  let myCounter = {};
  let divLinksArray = document.getElementsByClassName('link-1');

  for (eachElement of divLinksArray) {
    console.log("each element is ", eachElement);
    let tempSiteName = eachElement.children[0].innerText;
    let tempSiteCount = eachElement.children[1].innerText.split(" ")[1];
    myCounter[tempSiteName] = +tempSiteCount;

    // Add event listener for each element. 
    eachElement.addEventListener("click", iWasClicked);
    console.log(tempSiteName, tempSiteCount);
  }

  console.log("My counter is " , myCounter);

  function iWasClicked() {
    console.log("The button was clicked!", this);
    let tempSiteClicked = this.children[0].innerText;
    myCounter[tempSiteClicked]++;
    let countToUpdate = myCounter[tempSiteClicked];
    const numToReplace = /\d+/m;
    let newCount = this.children[1].innerText.replace(numToReplace, countToUpdate);
    this.children[1].innerText = newCount;
  }
}