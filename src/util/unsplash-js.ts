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

export default async function getRandomPhotos(): Promise<string> {
  const count = 1;
  const random = await unsplash.photos.getRandom({
    count,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return random.response[0].urls.raw;
}
