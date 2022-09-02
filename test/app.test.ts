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
