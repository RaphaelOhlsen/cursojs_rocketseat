let xhr = new XMLHttpRequest()

xhr.open('get', 'https://api.github.com/users/raphaelohlsen')
xhr.send(null)

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText))
  }
}
