/**
 * Created by li on 2017/8/8.
 */
module.exports = async ( ctx ) => {
    const title = 'home';
    await ctx.render('index', {
        title
    })
};