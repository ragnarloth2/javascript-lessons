//Closure é um escopo criado quando a function e declarada e permite manipular variáveis externas da função

const gl = 'Global'

function fora() {
    const g1 = 'Local'
    function dentro() {
        return g1
    }
    return dentro()
}

console.log(fora())

const funcao = fora()
console.log(funcao)