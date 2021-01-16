// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Lucas',
    idade: 28,
    peso: 92,
    endereco: {
        logradouro: "Rua Cambotás",
        numero: 545
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)