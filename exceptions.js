function erroImprimirNota(e) {
    throw 'Erro'
}

function imprimirNota(avaliacao) {
    try {
        console.log(`Avaliação de: ${aavaliacao.disciplina}, nota: ${avaliacao.nota}`)
    }
    catch(e) {
        erroImprimirNota(e)
    }
    finally {
        console.log('final')
    }
}

let avaliacao = {
    disciplina: 'Português',
    nota: 7
}

imprimirNota(avaliacao)