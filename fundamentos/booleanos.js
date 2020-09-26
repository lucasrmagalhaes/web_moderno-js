let isAtivo = false 
console.log(isAtivo) // Falso

isAtivo = true
console.log(isAtivo) // Verdadeiro

isAtivo = 1
console.log(!isAtivo) // Negação
console.log(!!isAtivo) // Afirmação

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