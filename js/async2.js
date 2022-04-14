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
})
asyncFn1()
async function asyncFn1() {
    console.log('asy1')
    res = await asyncFn2()
    console.log(res);
    // 这里是主线程？？
    console.log(11)
}

async function asyncFn2() {
    console.log('asy2')
    // promise.resolve().then()到任务队列
    return new Promise((res) => {
        res(10)
    })
}

setTimeout(() => {
    console.log(111);
}, 0);
