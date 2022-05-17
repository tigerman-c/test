"use strict"

function factorial(n) {
    if (n === 1) return 1
    return factorial(n - 1) * n
}

console.log(factorial(4))

function tail_factorial(m, n = 1) {
    if (m === 1) return n
    return tail_factorial(m - 1, n * m)
}
console.log(tail_factorial(4))