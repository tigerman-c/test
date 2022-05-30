function throttle(fn, time) {
    let endTime = 0
    return function (...args) {
        console.log(fn.name, endTime)
        const currentTime = Date.now()
        if (currentTime - endTime > time) {
            endTime = currentTime
            return fn.call(this, ...args)
        }
    }
}

function say() {
    console.log(this.name || 'say');
}

function run() {
    console.log('run');
}

const throttle_say = throttle(say, 3000)
// let throttle_run
throttle_say.call({ name: 'kw' })
setTimeout(() => {
    throttle_run = throttle(run, 3000)
    throttle_say()
    throttle_run()

}, 1000);
throttle_say.call({ name: 'kw' })
setTimeout(() => throttle_run(), 2000);
setTimeout(() => {
    throttle_say()
}, 3000);
throttle_say()
setTimeout(() => {
    throttle_say()
}, 1000);
setTimeout(() => {
    throttle_say()
}, 2000);
setTimeout(() => {
    throttle_say()
}, 3000);