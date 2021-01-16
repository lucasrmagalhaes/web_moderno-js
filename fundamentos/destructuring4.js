function rand( [min = 0, max = 1000] ){ // function rad com o destructuring criado em array.
    if (min < max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // floor - arrendoda para baixo
}

console.log(rand([50, 40]))
console.log(rand([992])) // passando 1 valor
console.log(rand([, 10])) // passando só o 2 valor
console.log(rand([])) // entre 0 e 1000
// console.log(rand()) // undefined