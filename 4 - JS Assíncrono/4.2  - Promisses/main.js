let myPromise = function () {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.github.com/users/diego3g')
    xhr.send(null)

    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4) {
        if (XMLHttpRequest.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject('Request Error')
        }
      }
    }
  })
}

myPromise()
  .then(function(reponse) {
    console.log(response)
  })
  .catch(function(error) {
    console.warn(error)
  })