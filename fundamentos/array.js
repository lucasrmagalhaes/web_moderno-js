const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // 7.7 e 9.2
console.log(valores[4]) // undefined

valores[4] = 10 // adicionando o valor de indice 4
console.log(valores)
console.log(valores.length) // quantidade de elementos no array

valores.push({id: 3}, false, null, 'teste') // adicionar valores
console.log(valores)

console.log(valores.pop()) // remove o último valor
delete valores[0] // deleta o indice 0
console.log(valores)

console.log(typeof valores) // é um objeto