import { createRenderer } from 'vue-server-renderer' 
import fs from 'fs'
import path from 'path'
import { createApp } from '../../app.js'

export default async(ctx, next) => {
    console.log(__filename);
    console.log(__dirname);
    console.log(process.cwd());
    const template = fs.readFileSync(path.resolve(process.cwd(),'dist/demo/default.html'),'utf-8');
    const renderer = createRenderer({
        template
    })
    const {app, router, store} = createApp();
    const context = {
        url:ctx.url,
        title:'Title'
    }
    renderer.renderToString(app, context, (err, html) => {
        ctx.body = html;
    });
    await next();
}