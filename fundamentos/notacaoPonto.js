console.log(typeof console) // object

console.log(Math.ceil(6.1)) // 7 - Arredonda para cima.

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' // Sobrescreve o nome
console.log(obj1.nome) // Bola

function Obj(nome){
    this.nome = nome // Visivel para fora.
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()