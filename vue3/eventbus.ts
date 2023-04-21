
class EventBus {
  cconstructor() {
    this.eventObj = {}
  }
  $on(name,callback){
    if(!this.eventObj[name]) {
      this.eventObj[name] = []
    }
    this.eventObj[name].push(callback)
  }
  $emit(name,...argv){
    this.eventObj[name].forEach(callback=>{
      callback(argv)
    })
  }
}
  // 初始化EventBus
  let EB = new EventBus();


  // 订阅事件
  EB.$on('key1', (name, age) => {
    console.info("我是订阅事件A:", name, age);
  })
  EB.$on("key1", (name, age) => {
    console.info("我是订阅事件B:", name, age);
  })
  EB.$on("key2", (name) => {
    console.info("我是订阅事件C:", name);
  })


  // 发布事件
  EB.$emit('key1', "小猪课堂", 26);
  EB.$emit('key2', "小猪课堂");