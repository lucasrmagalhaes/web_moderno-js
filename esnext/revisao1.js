// let e const
{
    var a = 2
    let b = 3
}

console.log(a) // 2
// console.log(b) // b is not defined

// Template String
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) // C o [ 'd', '3', 'r' ]

const [x, , y] = [1, 2, 3]
console.log(x, y) // 1 3

const { idade: i, nome: n } = { nome: 'Lucas', idade: 30 }
console.log(i, n); // 30 Lucas