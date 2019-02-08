
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

let {numero_estudantes: n, disciplinas: {portugues : p,matematica : m,ingles : i}} = escola

console.log(`Numero estudantes: ${n},
Disciplinas: Portugues: ${p},
Matemática: ${m},
Inglês: ${i}`)