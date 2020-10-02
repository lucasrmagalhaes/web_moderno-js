// pessoa -> 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa) // Pedro

// pessoa -> 456 -> {...}
/* pessoa = { nome: 'Ana' } */ // erro

Object.freeze(pessoa) // congela o o objeto
pessoa.nome = 'Maria' // ignorado por causa do freeze
console.log(pessoa.nome) // Pedro

// Object.freeze
const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria' // ignorado
console.log(pessoaConstante) // João