import { describe, it, expect } from '@jest/globals';
import request from 'supertest';
import app from '@src/app';

describe('Testing to see app is works', () => {
  it('Testing to see if Jest works', () => {
    expect(1).toBe(1);
  });

  it('Test index', async () => {
    const res = await request(app.callback()).get('/');

    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello World');
  });

  // test
  it('Test application is work', async () => {
    const res = await request(app.callback()).get('/test');

    expect(res.status).toBe(200);
    expect(res.text).toBe('ok');
  });

  it('Test text', async () => {
    const res = await request(app.callback()).get('/test/text');

    expect(res.status).toBe(200);
    expect(res.text).toBe('This is a text.');
  });

  it('Test json', async () => {
    const res = await request(app.callback()).get('/test/json');

    expect(res.status).toBe(200);
    expect(res.body.code).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe('ok');
  });
});

describe('Testing to see random image is works', () => {
  it('Testing random image is works', async () => {
    const res = await request(app.callback()).get('/random/image');

    expect(res.status).toBe(200);
    expect(res.body.code).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe('ok');
    expect(res.body.data).toMatch(/^https?:\/\/.*/);
  });
});
