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

const app = new Koa();

//配置控制台日志中间件
app.use(convert(koaLogger()));

//配置body解析中间件
app.use(bodyParser());

//静态资源中间件
app.use(koaStatic(convert(koaStatic(path.join(__dirname,"../dist")))));


