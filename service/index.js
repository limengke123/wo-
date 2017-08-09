/**
 * Created by li on 2017/8/4.
 */

const path = require("path");
const Koa = require("koa");
const koaLogger = require("koa-logger");
const convert = require("koa-convert");
const bodyParser = require("koa-bodyparser");
const koaStatic = require("koa-static");
const router = require("koa-router");

const log = console.log.bind(console);
const app = new Koa();

const routers = require('./routers/index');

const port = '3000';

//配置控制台日志中间件
app.use(convert(koaLogger()));

//配置body解析中间件
app.use(bodyParser());

//静态资源中间件,打包后的文件
app.use(convert(koaStatic(
    path.resolve(__dirname,'../dist/')
)));

app.use(routers.routes()).use(routers.allowedMethods());

app.listen(port);
log(`server is start at ${port} `);



