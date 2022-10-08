const url = "https://api.github.com/users/henferreirapro"

// console.log(fetch(url))

// encadeamento de Promises
fetch(url) 
  .then(response => response.json())
  .then(data => fetch(data.repos_url))
  .then(res => res.json())
  .then(dados => console.log(dados))
  .catch(e => console.error(e))
