const a = 1
const b = 2
const c = 3

// forma antiga
// const obj1 = { a: a, b: b, c: c } 

// forma nova
const obj2 = { a, b, c }
console.log(obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

// forma antiga
/*
 * const obj3 = {}
 * obj3[nomeAttr] = valorAttr
 * console.log(obj3)
 */

// forma nova
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    // forma antiga
    funcao1: function() {
        // ...
    },
    // forma nova
    funcao2() {
        // ...
    }
}

console.log(obj5)
