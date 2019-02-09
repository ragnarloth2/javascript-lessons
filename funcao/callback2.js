// Formas de implementação de callback

// Esse script busca encontrar notas menores que 4 e sua respectiva posição.

const notas = [7.2, 5 , 4 , 3 , 2 ,9 ,7 , 3.2]

// Sem utilizar callback
function semCallback() {
    for (let i in notas) {
        if (notas[i] < 4)
            console.log(`NOTA BAIXA - Indice: ${i}, Nota: ${notas[i]}`)
    }
}

semCallback()

// Utilizando callback
let notasBaixas = notas.filter( (nota) => nota < 4)
let notasBaixasSimple = notas.filter(function (nota) {
    return nota < 4
})
console.log(notasBaixas)
console.log(notasBaixasSimple)