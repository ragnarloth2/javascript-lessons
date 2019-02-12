/* 
    O desafio desse arquivo foi pegar um array de Strings compatíveis com JSON e converte-los para JSON, após isso
    imprimir apenas o campo preço utilizando callback e .map
*/

const carrinho = [
    '{ "nome" : "Lápis", "preço": 1 }',
    '{ "nome" : "Caderno", "preço" : 10.5 }',
    '{ "nome" : "Mochila", "preço" : 40.7 }',
    '{ "nome" : "Apontador", "preço" : 1.5 }'
]

let toObjCallback = Json => JSON.parse(Json)
let findByPrice = JsonProduto => JsonProduto.preço
let toReal = Preço => `R$ ${parseFloat(Preço).toFixed(2).replace('.',',')}`

console.log(carrinho.map(toObjCallback).map(findByPrice).map(toReal))