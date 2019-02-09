// Formas de se criar um objeto

// Literal

const obj = {}

// Object em JS

new Object

// Funções construtoras

function objj(nome,preco) {
    this.nome = nome
    this.preco = preco
}

//Função Factory

function functionFactory(nome, idade) {
    return {
        nome,
        idade
    }
}