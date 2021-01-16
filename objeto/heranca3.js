const pai = { nome: 'Lucas', corCabelo: 'Preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ramona'
console.log("Nome: " + filha1.nome) // Ramona
console.log("Cor do cabelo: " + filha1.corCabelo) // Preto

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true } // enumerable: listar ou não.
})

console.log(filha2.nome) // Bia
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // Bia tem cabelo preto.

console.log(Object.keys(filha1)) // [ 'nome' ]
console.log(Object.keys(filha2)) // [ 'nome' ]

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`) // Por herança: corCabelo
}