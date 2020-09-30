console.log(soma(3, 4)) // function declaration - consegue chamar antes

// function declaration
function soma(x, y) {
    return x = y
}

// function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4)) // chama depois

// named function expression
const mult = function mul(x, y) {
    return x * y
}

console.log(mult(3, 4)) // chama depois