/**
 * Created by li on 2017/8/8.
 */
module.exports = {

    async indexPage ( ctx ) {
        const title = 'admin page';
        await ctx.render('admin', {
            title,
        })
    },

};