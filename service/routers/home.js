/**
 * Created by li on 2017/8/8.
 */

const router = require('koa-router')();
const index = require('../controllers/index');

module.exports = router
    .get('/', index);