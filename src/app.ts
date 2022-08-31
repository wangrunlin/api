import Koa from 'koa';
// const Koa = require('koa');

const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

export default app;