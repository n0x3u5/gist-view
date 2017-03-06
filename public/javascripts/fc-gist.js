const httpRequest = new XMLHttpRequest()
const btn = document.querySelector('#btn')
const gistInput = document.querySelector('#gist-input')

function logResponse() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      const response = JSON.parse(httpRequest.responseText)
      const gistFiles = response.files
      Object.values(gistFiles).forEach((file) => { eval(file.content) })
    } else {
      console.error('There was a problem with the request.')
    }
  }
}

function requestStuff() {
  const gistId = gistInput.value

  if (!httpRequest) {
    console.error('Unable to create AJAX request.')
    return false
  }
  httpRequest.onreadystatechange = logResponse
  httpRequest.open('GET', '/btnClicked/nox')
  httpRequest.open('GET', `https://api.github.com/gists/${gistId}`)
  httpRequest.send()
  // httpRequest.open('POST', '/btnClicked');
  // httpRequest.setRequestHeader("Content-Type", "application/json");
  // httpRequest.send(JSON.stringify({ 'user': 'wtv' }));
  return true
}

btn.addEventListener('click', requestStuff)
