const https = require('https');
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2';

https.get(API, res => {
  console.log(res.statusCode)
  // 200
})

console.log("Conectando API")

// Resposta Correta:
  // Conectando API
  // 200

/** 
  Quando a linha 4 é executada o JS entende que é uma Callback 
  então continua lendo as linhas até o final e assim que terminar
  ele volta na linha 4 caso finalizado ele executa o resultado
*/
