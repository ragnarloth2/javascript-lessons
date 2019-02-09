/* Callback é uma função que pode ativar outra ao ocorrer certo evento, 
exemplificando um forEach a procura de elementos está se repetindo, se ele
encontrar um elemento ele vai chamar o console.log da func imprimirIndice, se não,
não acontecerá nada! */
const arrayFab = ['Ferrari', 'Ford', 'Fiat']

function imprimirIndice(nome, indice) {
    console.log(`${indice+1}. nome:${nome}`)
}

arrayFab.forEach(imprimirIndice)

arrayFab.forEach(a => console.log(a))