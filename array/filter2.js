/*
    Nesse script foi criado o nossa própria função .filter, ela verifica o retorno e se for true
    adiciona o valor em um array.
*/

Array.prototype.filter2 = function(callback) {
    newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Copo de Água' , preco: 2.5, fragil: true },
    { nome: 'Makita' , preco: 255.5, fragil: false },
    { nome: 'Chatuba de Mesquita' , preco: 25.57, fragil: true },
    { nome: 'CD' , preco: 3.35, fragil: false }
]

let callbackPrice = p => p.preco < 100

console.log(produtos.filter2(callbackPrice))