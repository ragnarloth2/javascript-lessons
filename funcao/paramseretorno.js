
// Não é necessário retorno em funções, porém não é muito prático utilizar
function mult(a,b) {
    if (((a*b)/2) > 10)
        return true
    else
        console.log('sem retorno!')
}

console.log(mult(5,2))