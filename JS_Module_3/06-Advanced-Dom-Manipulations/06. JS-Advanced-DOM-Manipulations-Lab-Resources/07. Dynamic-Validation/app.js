function validate() {
  let theInput = document.getElementById('email'); // grabbed our DOM input element
  const validEmail = /[a-z\d]+@[a-z\d]+\.[a-z]{1,3}/ // set up Regex to test valid email

  theInput.addEventListener('change', function(event) {
    console.log("The event ", event);
    console.log("The input value is ", theInput.value)
    console.log(validEmail.test(theInput.value));
    if (validEmail.test(theInput.value)) {
      event.target.classList.remove('error');
      theInput.value = ""
    } else {
      event.target.classList.add('error');
    }
  });
}
