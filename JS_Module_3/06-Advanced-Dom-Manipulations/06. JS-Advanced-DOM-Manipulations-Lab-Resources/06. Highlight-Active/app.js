function focus() {
    let theInputs = Array.from(document.getElementsByTagName('input'));

    console.log(theInputs);

    theInputs.forEach(singleInput => {
      // add event listener for focus
      singleInput.addEventListener('focus', function(event) {
        // add class name to div that holds the input
         event.target.parentElement.classList.add('focused');
         console.log(event.target.parentElement.classList);
      });

      // add event listener for blur
      singleInput.addEventListener('blur', function(event) {
        // remove class name from div that holds the input
        console.log("Blur event ", event.target);
        event.target.parentElement.classList.remove('focused');
      });

    });

    // let mainDiv = document.getElementsByTagName('div')[0];

    // mainDiv.addEventListener('click', function(e) {
    //   console.log("Main div event target is", e.target);
    //   if (e.target.type == "text") {
    //     console.log("An input was clicked!!!,  ", e)
    //   }
    // });
}