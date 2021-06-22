function loadCommits() {
  let usernameValue = document.getElementById('username').value;
  let repoValue = document.getElementById('repo').value;
  let githubURL = `https://api.github.com/repos/${usernameValue}/${repoValue}/commits`;
  let theUL = document.getElementById('commits');

  let imAPromise = fetch(githubURL); // I'm a new promise! I have res, reject

    imAPromise.then( (response) => {
      if (response.ok) {
        return response.json()
      } else {
        console.log(response)
        throw new Error(`${response.status} ${response.statusText}`)
      }
    }) // returning response.json()..becomes this new variable called parsedResponse
    .then( ( parsedResponse ) => {
      console.log(parsedResponse);

      for ( eachCommit of parsedResponse) {
        console.log("Each commit is ", eachCommit)
        let tempLI = document.createElement('li');
        tempLI.textContent = `${eachCommit.commit.author.name}: ${eachCommit.commit.message}`;
        console.log(tempLI)
        theUL.appendChild(tempLI)
      }
    })
    .catch( (error) => {
      console.log(error)
    });

}