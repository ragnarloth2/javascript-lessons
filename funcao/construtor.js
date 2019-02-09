
/*
    * O this serve para deixar um atributo/método visível fora, como se fosse um public
    * O método construtor é básicamente os parâmetros inseridos na função/objeto ex:
*/

// Neste exemplo os padrões por velocidade max são 225 e aceleração 10km/s
function Carro(velocidadeMax = 220, aceleracaoSeg = 20) {
    let velocidadeAtual = 0
    this.aceleraCarro = function() {
        velocidadeAtual += aceleracaoSeg
        if (velocidadeAtual > velocidadeMax)
            velocidadeAtual = velocidadeMax
        console.log(velocidadeAtual)
    }
}

let Ford = new Carro(220, 100)
Ford.aceleraCarro()
Ford.aceleraCarro()
Ford.aceleraCarro()
console.log()