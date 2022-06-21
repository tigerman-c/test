function fn() {
    outer: { let i = 0; while (i < 10) { console.log(i); if (i === 5) { break outer }; i++ } }
}

fn()