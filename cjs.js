let p = { a: 1 }
let c = 1

function changeP(v) {
    p.a = v
}
function changeC(v) {
    c = v
}

module.exports = { p, changeP, c, changeC }