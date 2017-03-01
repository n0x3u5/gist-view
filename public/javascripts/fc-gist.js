{
  var httpRequest = new XMLHttpRequest();
  var btn = document.querySelector('#btn');
  var gistInput = document.querySelector('#gist-input');
  btn.addEventListener('click', requestStuff);

  function requestStuff() {
    let gistId = gistInput.value;

    if (!httpRequest) {
      console.error('Unable to create AJAX request.');
      return false;
    }
    httpRequest.onreadystatechange = logResponse;
    httpRequest.open('GET', '/btnClicked/nox');
    httpRequest.open('GET', `https://api.github.com/gists/${gistId}`)
    httpRequest.send();
    // httpRequest.open('POST', '/btnClicked');
    // httpRequest.setRequestHeader("Content-Type", "application/json");
    // httpRequest.send(JSON.stringify({ 'user': 'wtv' }));
  }

  function logResponse() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        let response = JSON.parse(httpRequest.responseText);
        let gistFiles = response.files;
        for (let file in gistFiles) {
          if (gistFiles.hasOwnProperty(file)) {
            let gistFile = gistFiles[file];
            let content = gistFile.content;
            eval(content);
          }
        }
      } else {
        console.log('There was a problem with the request.');
      }
    }
  }
};
