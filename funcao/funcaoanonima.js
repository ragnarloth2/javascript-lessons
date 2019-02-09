
/* Função anônima é a função que não possui nome, a função abaixo está contida
dentro de uma variável, porém sem nome */
let mult = (a,b) => a*b

// Forma simplificada

let multSimple = function(a,b) {
    return a*b
}

/* Nessa parte o conteúdo da variável mullt foi armazenado dentro de uma variável
da função anônima da variável anonFunc, essa função mult foi armazenada dentro de op */
let anonFunc = (a,b,op = mult) => op(a,b)

//Forma simplificada

let anonFuncSimple = function(a,b,op = multSimple) {
    return multSimple(a,b)
}

// Aqui é chamado um log apenas para exibir o retorno das funções.
console.log(anonFunc(5,2))
console.log(anonFuncSimple(5,2))