/**
 * Created by li on 2017/8/8.
 */
const router = require('koa-router')();

module.exports = router.get('*',  async ( ctx ) => {
    const title = 'error';
    await ctx.render('error', {
        title
    })
});