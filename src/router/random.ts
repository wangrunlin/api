import getRandomPhotos from '@src/util/unsplash-js';
import Router from 'koa-router';

const random = new Router();

// random image
random.get('/image', async (ctx) => {
  const data = await getRandomPhotos();

  ctx.body = {
    code: 200,
    success: true,
    message: 'ok',
    data,
  };
});

export default random;
