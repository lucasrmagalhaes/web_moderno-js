/**
 *      Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e
 * com ponto de exclamação "!" no final.
 * 
 * Exemplos:
 * cumprimentar("Leonardo") // retornará "Olá, Leonardo
 * cumprimentar("Maria") // retornará "Olá, Maria!"
 */

// resolucao 1
function cumprimentar(nome) {
    const saudacao = "Olá"
    return ([saudacao, nome].join(', ').concat("!"))
}

// resolucao 2
function cumprimentar(nome) {
    return "Olá, " + nome + "!"
}

// resolucao 3
function cumprimentar(nome) {
    return `Olá, ${nome}!`
}