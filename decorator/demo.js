function decorator(...args) {
    args.forEach((arg, index) => {
        console.log(`参数${index}`, arg);
    });
    console.log('****************');
}

class TargetClass {
    @decorator
    field = 0;

    @decorator
    fn() { }

    @decorator
    get getFn() { }
}

const targetOne = new TargetClass();
console.log(targetOne.field, Object.getOwnPropertyDescriptor(targetOne, 'field'))