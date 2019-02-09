// Factory é uma função que retorna objetos, é bastante usado na linguagem. 

function adicionarPessoa(nome,idade, desconto = 0.1) {
    return {
        nome, idade, desconto
    }
}

console.log(adicionarPessoa('Renan', 18), adicionarPessoa('Maria', 19, 0.3))

/* 
    Utilizando classes fica mais fácil programar para quem já é acostumar com POO.
*/

class Pessoa {
    constructor(nome, idade, desconto = 0.1) {
        this.nome = nome
        this.idade = idade
        this.desconto = desconto
    }

    say() {
        console.log(`Meu nome é: ${this.nome}, tenho ${this.idade} de idade e possuo um desconto de ${this.desconto}`)
    }
}

const p1 = new Pessoa('Renan César', 18)
p1.say()