function soma() {
    let soma = 0
    for (i in arguments) { // arguments - sem valor
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) // 0
console.log(soma(1)) // 1
console.log(soma(1.1, 2.2, "Teste")) // Concatena o teste - 3.3Teste
console.log(soma('a', 'b', 'c')) // 0abc