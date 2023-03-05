
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