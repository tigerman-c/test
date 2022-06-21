const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;

module.exports = function (f1, f2) {
    // add tests
    suite.add(f1.name, f1)
        .add(f2.name, f2)
        // add listeners
        .on('cycle', function (event) {
            console.log(String(event.target));
        })
        .on('complete', function () {
            console.log('Fastest is ' + this.filter('fastest').map('name'));
        })
        .run()
}

