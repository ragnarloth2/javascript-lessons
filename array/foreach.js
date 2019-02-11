// O código será uma re-invenção da função forEach, no qual faz um callback de elementos.

/* Apontando para um objeto Array presente em prototype fiz uma função chamada forEach2 que recebe
como parâmetro uma função, essa função será preenchida com um callback como primeiro elemento o nome,
segundo elemento o índice e terceiro elemento um array completo */
Array.prototype.forEach2 = function(callback) {
    //Nessa parte foi utilizado o tamanho do Array presente em prototype como orientador
    for(let i = 0; i < this.length; i++) {
        //Aqui será retornado o valor de uma função
        return callback(this[i], i, this)
    }
}

const arrayTeste = ['Info 1', 'Info 2', 'Info 3']
// Utilizando 1 parâmetros
arrayTeste.forEach2((nome) => {
    console.log(`Nome: ${nome}`)
})
// Utilizando 2 parâmetros
arrayTeste.forEach2((nome, indice) => {
    console.log(`Indice: ${indice}) Nome: ${nome})`)
})
// Utilizando 3 parâmetros
arrayTeste.forEach2((nome, indice, array) => {
    console.log(`Indice: ${indice}) Nome: ${nome})
Array: ${array})`)
})