let valor // não inicializado
console.log(valor)

valor = null // ausência de valor, sempre usar nulo quando quiser zerar um valor.
console.log(valor)

// console.log(valor.toString()) // Erro! Caso tente acessar uma váriavel nula.

const produto = {}
console.log(produto.preco) // undefined
console.log(produto) // {}

produto.preco = 3.50 // definindo o valor
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // torna objeto novamente
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) // false
console.log(produto) // { preco: null }