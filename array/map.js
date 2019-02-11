/* 
    A função .map é um transformador de arrays, com ele podemos realizar operações em todo array utilizando
    poucas linhas, essa função não altera o array de origem, ela gera um novo de acordo com suas regras utilizando
    callback.

    O objetivo deste arquivo é transformar em um array diferente levando em consideração que, todos os items desse
    array deverão ser multiplicados por 2 e convertidos em moeda brasileira.
*/

let arrayOriginal = [1,2,3,4,5]

// Aqui é feito uma função para ser usada como callback da .map
let mult = valor => valor*2

// Essa função transforma o valor inserido para um Float, logo após limita as , para 2 e troca vírgula por ponto.
let toMoney = valor => `R$ ${parseFloat(valor).toFixed(2).replace(',','.')}`

// Aqui utilizamos .map chamando as funções mult e toMoney como callback.
console.log(`Array original: ${arrayOriginal}
Convertido: ${arrayOriginal.map(mult).map(toMoney)}`)