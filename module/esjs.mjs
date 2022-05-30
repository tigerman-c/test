let p = { a: 1 }
let c = 1

function changeP(v) {
    p.a = v
}
function changeC(v) {
    c = v
}
function logPa() {
    console.log(p.a++);
}


export { p, changeP, c, changeC, logPa }
export default 'xxx'