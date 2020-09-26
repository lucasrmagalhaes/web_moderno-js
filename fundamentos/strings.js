const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna a letra do Indice 4.
console.log(escola.charAt(5)) // Valor vazio.
console.log(escola.charCodeAt(3)) // Código relacionado a tabela Unicode.
console.log(escola.indexOf('3')) // Pegar por um caractere o indice dele.

// Selecionando Indices.
console.log(escola.substring(1)) 
console.log(escola.substring(0, 3))

console.log('Escola ' .concat(escola).concat("!")) // Concatenando.
console.log('Escola ' + (escola) + ("!")) // Concatenando.
console.log(escola.replace(3, 'e')) // Substituindo um valor.

console.log('Ana, Maria, Pedro'.split(',')) // Split - Gerando um Array.