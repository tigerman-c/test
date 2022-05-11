const { changeP, p, changeC, c } = require('./cjs.js')

console.log('p', p)
changeP(2)
console.log('p', p)

console.log('c', c)
changeP(2)
console.log('c', c)

// node testCjs
// p { a: 1 }
// p { a: 2 }
// c 1
// c 1