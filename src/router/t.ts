import Router from 'koa-router';

const t = new Router();

t.get('/', (ctx) => {
  ctx.body = 'ok';
});

t.get('/text', (ctx) => {
  ctx.body = 'This is a text.';
});

t.get('/json', (ctx) => {
  ctx.body = {
    code: 200,
    success: true,
    message: 'ok',
  };
});

export default t;
