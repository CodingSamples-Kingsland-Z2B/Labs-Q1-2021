function attachGradientEvents() {
    let theGradient = document.getElementById('gradient');
    console.log(theGradient)
    let theResult = document.getElementById('result');

    theGradient.addEventListener('click', function(event) {
      console.log("The click event.pageX (width) ", event.offsetX, theGradient.clientWidth);
      let thePercent = Math.floor((event.offsetX / theGradient.clientWidth) * 100)
      console.log("The % is ", thePercent);
      theResult.innerText = thePercent + "%";
    });
    console.log(theGradient);
}