
let Carro = {
    cor: 'preto'
}

let Ferrari = {
    __proto__: Carro,
    desenho: 'Dragon'
}

console.log(JSON.stringify(Ferrari.cor))