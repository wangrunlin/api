import Router from 'koa-router';

import t from './t';
import random from './random';

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'View source on https://github.com/wangrunlin/api';
});

router.use('/t', t.routes());
router.use('/random', random.routes());

export default router;
