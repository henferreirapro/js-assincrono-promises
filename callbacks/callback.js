// Funções aceitam outros dados como argumentos, como outras funções
// Conceito de Callback é uma função que é passada como argumento
// para outra função e depois de algumas outras tarefas ela é 
// chamada de volta.

function imprimirDados(dado) {
  console.log("Executando uma tarefa");
  console.log("Executando outra tarefa");
  console.log(dado())
}

imprimirDados(function () {
  return  "Olá Mundo";
})