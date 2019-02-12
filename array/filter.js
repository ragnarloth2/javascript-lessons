/* 
    O objetivo desse script foi filtrar o array produtos e selecionar apenas produtos não fraǵeis e de preço maior
    que 100.
*/

const produtos = [
    { nome: 'Copo de Água' , preco: 2.5, fragil: true },
    { nome: 'Makita' , preco: 255.5, fragil: false },
    { nome: 'Chatuba de Mesquita' , preco: 25.57, fragil: true },
    { nome: 'CD' , preco: 3.35, fragil: false }
]

// Aqui é feito uma função callback que filtra se o produto é ou não frágil
const callbackFragil = p => p.fragil === false
// Aqui é feito uma função callback que filtra se o produto é > 100
const callbackPreco = p => p.preco > 100


console.log(produtos.filter(callbackFragil).filter(callbackPreco))
