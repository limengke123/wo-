/**
 * Created by li on 2017/8/8.
 */

const router = require('koa-router')();
const userInfoController = require('./../controllers/user-info');

const routers = router
    .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
    .post('/user/signIn.json', userInfoController.signIn)
    .post('/user/signUp.json', userInfoController.signUp);


module.exports = routers;