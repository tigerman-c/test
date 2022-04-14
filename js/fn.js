// 测试软绑定
Function.prototype.softBind = function (obj) {
    var fn = this
    var curried = [].slice.call(arguments, 1)
    var bound = function () {
        return fn.apply((!this || this === (window || global)) ? obj : this, curried.concat.apply(curried, arguments))

    }
    bound.prototype = Object.create(fn.prototype)
    return bound
}

function foo() {
    console.log("name: " + this.name)


}

let obj = { name: 'obj' }

var fooObj = foo.softBind(obj)

window.global = {
    a: 11
}


