/**Conceito de Promises
    Promises é uma promessa de algo ira acontecer e ela retorna um 
    Certo ou Errado ou de outra forma ela podera Resolver um problema
    ou rejeitar o problema e assim seguira para o proximo passo até
    ser finalizada.
*/

/**Exemplo simples de uma Promisses
    Pedindo um uber:
    1 - User pediu a corrida
    2 - Corrida aceita = resolve
    2.1 - Corrida negada = reject
    3 - Finalização do pedido de corrida
*/

console.log("Pedindo Uber.")

let corridaAceita = true

const pedido = new Promise( (resolve, reject) => {
  if(corridaAceita) {
    return resolve("Motorista aceitou a corrida!")
  } else {
    return reject("Motorista negou a corrida!")
  }
} )

console.log("Aguardando Motorista...")

pedido
  .then(result => console.log(result))
  .catch(e => console.error(e))
  .finally( () => console.log("Pedido finalizado."))
