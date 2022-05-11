// 使用koa，充当测试
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    // console.log(ctx, 2314)
    const reqPath = ctx.request.url
    if (reqPath === '/redirect') {
        ctx.status = 301
        ctx.redirect('/')

        // ctx.body = 'redirect home'
    }
    ctx.body = 'success'
});

console.log('http://172.17.32.19:3113/')
app.listen(3113);