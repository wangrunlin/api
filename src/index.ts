// eslint-disable-next-line import/no-extraneous-dependencies
import Koa from 'koa';
// const Koa = require('koa');

const app = new Koa();

// response
app.use((ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('Application on listen http://127.0.0.1:3000');
});

export default app;
