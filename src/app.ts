import Koa from 'koa';
import router from '@src/router';

const app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
