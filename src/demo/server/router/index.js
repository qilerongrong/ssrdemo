import Router from 'koa-router'
import fs from 'fs'
const router = new Router();

// fs.readdirSync('./routes').forEach((filename) => {
//     const route = fs.readFileSync(`./routes/${filename}.js`);
//     route(router);
// })

router.get('*', async(ctx,next) => {
    ctx.body = '';
    await next();
})
export default router