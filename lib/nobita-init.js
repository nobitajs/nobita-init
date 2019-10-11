module.exports = async (ctx, next) => {
  ctx.app.quoteContext.ctx = ctx;
  
  ctx.cookies.del = (key) => {
    ctx.cookies.set(key, null, { expires: new Date(0) })
  }
  ctx.startTime = +new Date();
  ctx.app.emit('request', ctx);
  await next();
  ctx.app.emit('response', ctx);
}
