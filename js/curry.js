const curry = (fn, arr = []) => (...args) => (a => a.length === fn.length ? fn(...a) : curry(fn, a))([...arr, ...args])
let curryPlus = curry((a, b, c, d) => console.log(a + b + c + d))

curryPlus(1, 2, 3, 4) //返回10
curryPlus(1, 2)(4)(3) //返回10
curryPlus(1, 2)(3, 4) //返回10
curryPlus(1)(2)(3)(4) //返回10
