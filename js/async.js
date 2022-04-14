console.log('2');
new Promise(function (resolve) {
    console.log('4');
    resolve();
}).then(function () {
    console.log('5');
}).then(function () {
    console.log('6');
}).then(function () {
    console.log('7');
}).then(function () {
    console.log('8');
}).then(function () {
    console.log('9');
})
new Promise(function (resolve) {
    resolve();
}).then(function () {
    console.log('55');
}).then(function () {
    console.log('66');
}).then(function () {
    console.log('77');
})
// 这是同步
Promise.resolve().then(console.log(123)).then(console.log(456))
asyncFn1()
async function asyncFn1() {
    console.log('asy1')
    const res = await asyncFn2()
    // 这里后面也是一个then()
    console.log(res)
    console.log(11)
}

async function asyncFn2() {
    console.log('asy2')
    // return Promise.resolve(10)
    // return Promise.resolve().then(() => 10).then(() => 10)
    // await会对return的内容放到一个Promise的then里面。
    // return new Promise(res => {
    //     console.log(100);
    //     res(10)
    // })
    // .then(res => {
    //     console.log(101)
    //     return res
    // })
    // .then(res => {
    //     console.log(102)
    //     return res
    // })
    // .then(res => {
    //     console.log(103)
    //     return res
    // })
    return 10
}
