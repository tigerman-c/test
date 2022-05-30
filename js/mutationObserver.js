function testMutation(cb) {
    const observer = new MutationObserver(cb)
    const textNode = document.createTextNode(1)
    observer.observe(textNode, {
        characterData: true
    })
    textNode.data = String(2)
}

testMutation(() => {
    console.log('%c [  ]-12', 'font-size:13px; background:pink; color:#bf2c9f;', 'mutation')
})


console.log('%c [  ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', 'async')