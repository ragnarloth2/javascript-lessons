
// Argument é a maneira de recuperar argumentos de uma função sem parâmetros.
function mult() {
    let mult = 1
    for (i in arguments) {
        mult *= arguments[i]
        console.log(`Parâmetro ${i}: ${arguments[i]}`)
    }
    return mult
}

//Soma de todos os parâmetros da function
console.log(`Multiplicação total: ${mult(5,2,6,3,12)}`)