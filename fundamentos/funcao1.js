// Função é um trecho/bloco de código onde recebe um nome e pode ser chamada depois.

// função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3) // 5
imprimirSoma(2) // 2 + undefinied = NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // soma a + b e ignora o resto.
imprimirSoma() // NaN

// função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3)) // 5
console.log(soma(2)) // 2 + 0 = 2
console.log(soma()) // NaN | valor de a não foi definido