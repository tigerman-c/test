const compare = require('./utils/benchCompare')

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function useLet() {
    for (let i = 0, len = arr.length; i < len; i++) {
        arr[i]
    }
}
function useVar() {
    for (var i = 0, len = arr.length; i < len; i++) {
        arr[i]
    }
}

compare(useLet, useVar)