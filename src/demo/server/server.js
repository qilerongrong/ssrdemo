import Koa from 'koa'
import router from './router'
import fs from 'fs'
// import path from 'path'
import serverBundle from '../vue-ssr-server-bundle.json'
import clientManifest from '../vue-ssr-client-manifest.json'
import { createBundleRenderer } from 'vue-server-renderer'

const app = new Koa();
app.use(router.routes());

const template = fs.readFileSync('dist/demo/')
const renderer = createBundleRenderer(serverBundle, {
    template,
    clientManifest
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})