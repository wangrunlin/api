import { createApi } from 'unsplash-js';
import { env } from 'process';
import * as nodeFetch from 'node-fetch';
import * as dotenv from 'dotenv';

dotenv.config();

const accessKey: string = env.UNSPLASH_ACCESS_KEY ?? '';
const unsplash = createApi({
  accessKey,
  fetch: nodeFetch.default as unknown as typeof fetch,
});

const defaultURL = 'https://images.unsplash.com/photo-1523730205978-59fd1b2965e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1054&q=80';

export default async function getRandomPhotos(): Promise<string> {
  const count = 1;
  const random = await unsplash.photos.getRandom({
    count,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return random.response ? random.response[0].urls?.raw : defaultURL;
}
