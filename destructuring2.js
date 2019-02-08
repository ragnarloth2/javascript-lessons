
let verificadorNota = notaAluno => notaAluno >= 5 ? 'Aprovado!' : 'Reprovado!'

console.log(verificadorNota(5))

// destructuring com objetos

let escola = {
    numero_estudantes : 30,
    disciplinas: {
        portugues: true,
        matematica: true,
        ingles: false
    }
}

let {numero_estudantes, disciplinas: {portugues,matematica,ingles}} = escola

console.log(`Numero estudantes: ${numero_estudantes},
Disciplinas: Portugues: ${portugues},
Matemática: ${matematica},
Inglês: ${ingles}`)