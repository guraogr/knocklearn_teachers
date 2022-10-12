import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'knocklearn',
  apiKey: process.env.API_KEY as string,
});
