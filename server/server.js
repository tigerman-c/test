// 使用koa，充当测试
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = await new Promise((res) => {
        setTimeout(() => {
            res('Hello World')
        }, 5000);
    })
});

console.log('http://172.17.61.11:3113/')
app.listen(3113);