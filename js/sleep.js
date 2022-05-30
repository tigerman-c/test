// function debounce(fn, time) {
//     let timer
//     return function (...args) {
//         timer = setTimeout(fn.bind(this, ...args), time);
//     }
// }

// function say() {
//     console.log(this.name || 'say');
// }

// function run() {
//     console.log('run');
// }


class PlayBoy {
    sleepArr = []
    sayHi() {
        setTimeout(() => {
            console.log('hi')
        }, this.getSleepTime());
        return this
    }
    play(s) {
        setTimeout(() => {
            console.log(s);
        }, this.getSleepTime());
        return this
    }
    sleep(t) {
        this.sleepArr.push(t)
        return this
    }
    getSleepTime() {
        return this.sleepArr.reduce((num, time) => {
            return num += time
        }, 0)
    }
}

const p1 = new PlayBoy()
p1.sayHi().sleep(2000).play(123).sleep(1000).play(333).sayHi()
