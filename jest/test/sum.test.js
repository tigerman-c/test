const sum = require('../sum.js')
// import sum3 from '../sum'

describe('cjs sum function test', () => {
    it('sum(1,2) === 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
    // it('sum(111,222) === 3',()=>{
    //     expect(sum(111,222)).toBe(333)
    // })
    // it('sum(0.1,0.2) === 3',()=>{
    //     expect(sum(0.1,0.22)).toBe(0.3)
    // })
})
// describe('esm sum function test',()=>{
//     it('sum(1,2) === 3',()=>{
//         expect(sum3(1,2)).toBe(3)
//     })
//     it('sum(111,222) === 3',()=>{
//         expect(sum3(111,222)).toBe(333)
//     })
//     // it('sum(0.1,0.2) === 3',()=>{
//     //     expect(sum(0.1,0.22)).toBe(0.3)
//     // })
// })