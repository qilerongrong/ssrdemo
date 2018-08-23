import Koa from 'koa'
import serverRouter from './router'
import fs from 'fs'
import path from 'path'
import body from 'koa-body'
// import serverBundle from 'dist/vue-ssr-server-bundle.json'
// import clientManifest from 'dist/vue-ssr-client-manifest.json'
import { createRenderer } from 'vue-server-renderer' 
import { createApp } from '../app.js'
const server = new Koa();
server.use(body({
    multipart:true,
    encoding:'gzip'
}));
server.use(serverRouter.routes());
console.log(__dirname);
console.log(process.cwd());
const template = fs.readFileSync(path.resolve(__dirname,'default.html'),'utf-8');
const renderer = createRenderer({
    template
})

server.use(async(ctx,next) => {
    const {app, router, store} = createApp();
    const context = {
        url:ctx.url,
        title:'Title'
    }
    renderer.renderToString(app, context, (err, html) => {
        ctx.body = html;
    });
    await next();
})
const port = process.env.PORT || 8080
server.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})