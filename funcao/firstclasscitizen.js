//High order function

function function1() {}

//Armazenado em variável
let function2 = function() {}

//Armazenando em Array
let array = [function(a,b) {return a+b}, function(a,b) {return a*b}]

// Utilizando functions em Array
console.log(array[0](1,2), array[1](2,5))

// Em atributo de objeto
let obj = {}
obj.falar = function(words) {
    return words
}

//Função em arrow
obj.multArrow = (a,b) => {return a*b}

// Passar função como parâmetro.

function recebeObjeto(obj) {
    console.log(obj.falar('Hello World!'))
}

recebeObjeto(obj)

