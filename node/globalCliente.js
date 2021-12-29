require('./global')

// console.log(global.MinhaApp.saudacao())
console.log(MinhaApp.saudacao()) // Estou em todos os lugares!

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome) // Eita! -> Sem freeze | Sistema Legal -> Com freeze