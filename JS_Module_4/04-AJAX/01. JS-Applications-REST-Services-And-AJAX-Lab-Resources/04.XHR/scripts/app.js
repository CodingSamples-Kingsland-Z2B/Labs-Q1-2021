function loadRepos() {
  let gitHubURL = 'http://api.github.com/users/testnakov/repos';
  let resultDIV = document.getElementById('res');
  const httpRequest = new XMLHttpRequest();

  httpRequest.addEventListener('readystatechange', function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      let tempDiv = document.createElement('div');
      let theRepos = JSON.parse(httpRequest.responseText);
      resultDIV.textContent = httpRequest.responseText;
      console.log(theRepos);
    }
   });

  httpRequest.open("GET", gitHubURL);
  httpRequest.send();
}