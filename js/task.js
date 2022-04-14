setTimeout(function () {
    console.log('2');
    new Promise(function (resolve) {
        console.log('4');
        resolve();
    }).then(function () {
        console.log('5');
    }).then(function () {
        console.log('6');
    })
});
setTimeout(function () {
    console.log('10');
    new Promise(function (resolve) {
        console.log('11');
        resolve();
    }).then(function () {
        console.log('12')
    }).then(function () {
        console.log('13');
    })
})