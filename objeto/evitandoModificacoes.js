// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto)) // false

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto) // { nome: 'Borracha', preco: 1.99 }

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Seleado:', Object.isSealed(pessoa)) // true

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // { nome: 'Juliana', idade: 29 }

// Object.freeze = seleado + valores constantes