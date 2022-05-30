import { p, changeP, c, changeC, logPa } from './esjs.mjs'

console.log('p', p)
changeP(2)
console.log('p', p)
console.log('pa')
logPa()

console.log('c', c)
changeP(2)
console.log('c', c)

// node --experimental-modules module/testES.mjs
// p { a: 1 }
// p { a: 2 }
// c 1
// c 1