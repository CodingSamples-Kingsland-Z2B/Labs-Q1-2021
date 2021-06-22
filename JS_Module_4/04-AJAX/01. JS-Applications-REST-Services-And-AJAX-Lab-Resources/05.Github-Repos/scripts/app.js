function loadRepos() {
  let someUsername = document.getElementById('username').value;
  let gitHubURL = `https://api.github.com/users/${someUsername}/repos`
  let ulRepos = document.getElementById('repos');
  console.log(ulRepos);


  fetch(gitHubURL)
  .then(response => response.json())
  .then(data => {
    console.log("The fetched data is " , data);
    ulRepos.textContent = "";
    if (data.message == "Not Found") {
      console.log("Not found! ");
      let tempLI = document.createElement('li');
      tempLI.textContent = data.message
      ulRepos.appendChild(tempLI);
    } else {
    data.forEach( element => {
      
      console.log("The element is ", element.name)
        // Create an li, create a temp anchor tag

        let tempLI = document.createElement('li');
        let tempA = document.createElement('a');
        // Update the anchor tags textContent

        tempA.textContent = element.full_name
        tempA.href = element.html_url
        tempA.id = element.name
        tempA.setAttribute("cat", "purple")
        tempLI.appendChild(tempA);

        // Append as a child of the UL element (ulRepos)
        ulRepos.appendChild(tempLI);
    
    })
  }
  
  
  }).catch(error => console.log(error))
}

// fetch("https://api.github.com/users/${someUsername}/repos")
//     .then(response => response.json())
//     .then(body => {
//         console.log(body)
//     })
//     .catch(error => alert ("An error"));




// fetch('yourURL')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     // do something with the now parsed response
//   });

var obj = { 'France': 'Paris', 'England': 'London' };
for (const [bus, time] of Object.entries(obj)) {
    console.log(bus, time);
}