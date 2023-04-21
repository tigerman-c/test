let a = 'aa'

let b = {
    a: 1234
}

function s(a) { console.log(a || 2) }

(new Function('function s(a) { console.log(a || 2) };s()'))(12)
// eval('s(12)')