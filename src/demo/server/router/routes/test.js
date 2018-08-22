export default router => {
    router.get('test', async(ctx,next) => {
        ctx.body = "test";
        await next();
    })
}