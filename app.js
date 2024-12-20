import Koa from 'koa';
import { bodyParser } from '@koa/bodyparser';
import controller from './controller.js';

const app = new Koa();

// 跨域中间件
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*'); // 允许所有来源
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // 允许的 HTTP 方法
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头
    if (ctx.method === 'OPTIONS') {
        ctx.status = 204; // 预检请求直接返回 204
        return;
    }
    await next();
});

// log url:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// 解析request.body:
app.use(bodyParser());

// 使用controller(), 注意controller模块导出的是async函数，要通过await调用:
app.use(await controller());

app.listen(3000);
console.log('app started at port 3000...');
