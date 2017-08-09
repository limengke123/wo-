/**
 * Created by li on 2017/8/8.
 */
const router = require('koa-router')();
const admin = require('./../controllers/admin');

module.exports = router.get( '/', admin.indexPage );