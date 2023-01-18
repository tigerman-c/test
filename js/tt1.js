let a = 'aa'

function s(a) { console.log(a || 2) }

(new Function('function s(a) { console.log(a || 2) };s()'))(12)
// eval('s(12)')