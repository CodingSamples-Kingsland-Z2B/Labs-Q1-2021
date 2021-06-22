function solve() {

  let buttonChoose = document.getElementById('dropdown');
  let theBox = document.getElementById('box');
  let theList = document.getElementById('dropdown-ul');

  console.log(buttonChoose, theBox, theList);

  buttonChoose.addEventListener('click', function() {
    let currentStyle = theList.style.display;
    if (currentStyle != "block") {
      theList.style.display = "block";
    } else {
      theList.style.display = "none";
      theBox.style.backgroundColor = "rgb(114, 112, 112)";
    }
  });
  theList.addEventListener('click', (event) => {
    console.log("The event is ", event );
    console.log(this.event)
    let newBG = event.target.textContent;
   // console.log(newBG);
   // this.event.target.style.backgroundColor = newBG
    theBox.style.backgroundColor = newBG;
  });
}