let num1 = 1
let num2 = 2

num1++
console.log(num1) // 2
--num1
console.log(num1) // 1

console.log(++num1 === num2--) // true
console.log(++num1 === num2--) // false