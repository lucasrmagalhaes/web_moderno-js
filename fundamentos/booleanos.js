let isAtivo = false 
console.log(isAtivo) // falso

isAtivo = true
console.log(isAtivo) // verdadeiro

isAtivo = 1
console.log(!isAtivo) // negação
console.log(!!isAtivo) // afirmação

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // último campo é verdadeiro.

let nome = ''
console.log(nome || 'Desconhecido') // caso falso, imprimi o segundo campo.