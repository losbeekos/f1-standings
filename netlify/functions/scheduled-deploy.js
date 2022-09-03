import fetch from 'node-fetch';
import { schedule } from '@netlify/functions';

const BUILD_HOOK =
  'https://api.netlify.com/build_hooks/631250ec8a740b1b2ead76d1';

// At minute 59 past every hour from 0 through 23 on Sunday.
// https://crontab.guru/#59_0-23_*_*_0
const handler = schedule('59 0-23 * * 0', async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST',
  }).then(response => {
    console.log('Build hook response:', response);
  });

  return {
    statusCode: 200,
  };
});

export { handler };
