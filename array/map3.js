/*
    Nessa etapa o desafio foi recriar a função .map, o funcionamento dela, ela funciona da seguinte maneira:
    percorre todos os arrays adicionando valores a um array dentro da função, ao finalizar retorna o Array
*/

Array.prototype.map2 = function(callback) {
    nArray = []
    for(let i = 0; i < this.length; i++) {
        nArray.push(callback(this[i], i, this))
    }
    return nArray
}

const carrinho = [
    '{ "nome" : "Lápis", "preço": 1 }',
    '{ "nome" : "Caderno", "preço" : 10.5 }',
    '{ "nome" : "Mochila", "preço" : 40.7 }',
    '{ "nome" : "Apontador", "preço" : 1.57 }'
]

let toObjCallback = Json => JSON.parse(Json)
let findByPrice = JsonProduto => JsonProduto.preço
let toReal = Preço => `R$ ${parseFloat(Preço).toFixed(2).replace('.',',')}`

console.log(carrinho.map2(toObjCallback).map(findByPrice).map(toReal))