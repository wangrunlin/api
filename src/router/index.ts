import Router from 'koa-router';
import getRandomPhotos from '@src/util/unsplash-js';

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hello World';
});

// test
router.get('/test', (ctx) => {
  ctx.body = 'ok';
});

router.get('/test/text', (ctx) => {
  ctx.body = 'This is a text.';
});

router.get('/test/json', (ctx) => {
  ctx.body = {
    code: 200,
    success: true,
    message: 'ok',
  };
});

// random image
router.get('/random/image', async (ctx) => {
  const data = await getRandomPhotos();

  ctx.body = {
    code: 200,
    success: true,
    message: 'ok',
    data,
  };
});

export default router;
