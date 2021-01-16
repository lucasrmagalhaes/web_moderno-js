function rand({ min = 0, max = 1000 }) { 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { min: 40, max: 50 } // objs randomicos entre 40 e 50.
console.log(rand(obj))
console.log(rand({ min: 955 })) // 955 até 1000
console.log(rand({})) // 0 até 1000
// console.log(rand()) // Erro