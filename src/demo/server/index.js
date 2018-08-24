import Koa from 'koa'
// import router from './router'
import fs from 'fs'
import path from 'path'
import body from 'koa-body'
import serve from 'koa-static'
import render from './middleware/render'
// import serverBundle from 'dist/vue-ssr-server-bundle.json'
// import clientManifest from 'dist/vue-ssr-client-manifest.json'

const app = new Koa();
app.use(body({
    multipart:true,
    encoding:'gzip'
}));
// app.use(router.routes());

app.use(serve('./dist'));
app.use(render)
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})