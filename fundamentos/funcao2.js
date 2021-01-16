// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando um função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno Implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// Um valor
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')