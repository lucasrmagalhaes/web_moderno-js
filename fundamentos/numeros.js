const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1, peso2)) // É inteiro?

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Define a Quantidade de Casas Decimais.
console.log(media.toString()) // Transforma em String.
console.log(media.toString(2)) // Converte em Binário.
console.log(typeof media)
