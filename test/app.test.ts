import { it, expect } from '@jest/globals';
import request from 'supertest';
import app from '@src/app';

it('Testing to see if Jest works', () => {
  expect(1).toBe(1);
});

it('Hello World works', async () => {
  const res = await request(app.callback()).get('/');

  expect(res.status).toBe(200);
  expect(res.text).toBe('Hello World');
});

// test
it('test application is work', async () => {
  const res = await request(app.callback()).get('/test');

  expect(res.status).toBe(200);
  expect(res.text).toBe('ok');
});

it('test text', async () => {
  const res = await request(app.callback()).get('/test/text');

  expect(res.status).toBe(200);
  expect(res.text).toBe('This is a text.');
});

it('test json', async () => {
  const res = await request(app.callback()).get('/test/json');

  expect(res.status).toBe(200);
  expect(res.body.code).toBe(200);
  expect(res.body.success).toBe(true);
  expect(res.body.message).toBe('ok');
});
