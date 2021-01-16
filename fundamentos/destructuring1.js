// novo recurso do ES2015

const pessoa = {
    nome: 'Deborah',
    idade: 30,
    endereco: {
        logradouro: 'Rua Cambotás',
        numero: 545
    }
}

const { nome, idade } = pessoa // tirando nome e idade do objeto (pessoa)
console.log(nome, idade) // Deborah 30

const { nome: n, idade: i } = pessoa
console.log(n, i) // Deborah 30

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) // undefined true

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // Rua Cambotás 545 undefined

// const { conta: { ag, num } } = pessoa
// console.log(ag, num) // Erro