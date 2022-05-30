import { setStorage, getStorage } from '../web'

// describe('getStore', () => {
//     it('getStore', () => {
//         expect((() => {
//             setStorage('s1', 1)
//             return getStorage('s1')
//         })()).toBe(1)
//     })
// })

test('getStore', () => {
    setStorage('s1', 1)
    const data = getStorage('s1')

    expect(data).toBe('1')
})