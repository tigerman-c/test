function observe(target) {
    return new Proxy(target,{
        get(target,key,receiver){
            console.log('%c [  ]-4', 'font-size:13px; background:pink; color:#bf2c9f;', '使用中')
            return Reflect.get(target,key,receiver)
        },
        set(target,key,value,receiver){
            console.log('%c [  ]-8', 'font-size:13px; background:pink; color:#bf2c9f;', '修改中')
            return Reflect.set(target,key,value,receiver)
        }
    })
}

let o1 = observe({a:11})
o1.a
o1.a = 123